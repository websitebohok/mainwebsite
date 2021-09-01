const path = require(`path`)
const _ = require("lodash")
const { NONAME } = require("dns")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              path
              templateKey
              category
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
  }

  const pages = result.data.allMarkdownRemark.edges.filter(
    (edge) =>
      !(
        edge.node.frontmatter.templateKey === "post-template" &&
        edge.node.frontmatter.category === "pranala"
      )
  )
  pages.forEach(({ node }) => {
    const id = node.id

    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.js`
      ),
      context: {
        slug: node.fields.slug,
        category:
          node.frontmatter.templateKey === "category-template" ||
          node.frontmatter.templateKey === "post-template"
            ? node.frontmatter.category
            : null,
        isPranala:
          node.frontmatter.templateKey === "category-template"
            ? node.frontmatter.category === "pranala"
              ? true
              : false
            : null,
        id,
      },
    })
  })
}

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    if (node.frontmatter.templateKey === "post-template") {
      const date = new Date(node.frontmatter.date)
      const year = date.getFullYear()

      createNodeField({ node, name: "year", value: year })
    }
  }
}

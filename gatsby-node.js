const path = require(`path`)
const _ = require("lodash")
const { NONAME } = require("dns")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Page Templates
  const pageTemplate = path.resolve("src/templates/page-template.js")
  const blogTemplate = path.resolve("src/templates/post.js")
  const categoryTemplate = path.resolve("src/templates/category.js")

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              tags
              templateKey
              category
            }
          }
        }
      }
      categoryGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.js`
      ),
      context: {
        slug: node.frontmatter.path,
        category:
          node.frontmatter.templateKey === "category"
            ? node.frontmatter.category
            : null,
      },
    })
  })

  // Create blog list pages

  // const categoryPages = result.data.allMarkdownRemark.edges.filter(
  //   (edge) => edge.node.frontmatter.templateKey == "category"
  // ) // extract all category pages

  // categoryPages.forEach((category, index) => {
  //   const posts = result.data.allMarkdownRemark.edges.filter(
  //     (edge) =>
  //       edge.node.frontmatter.templateKey == "post" &&
  //       edge.node.frontmatter.category == category
  //   ) // harusnya dipisahkan per kategori
  //   const postsPerPage = 10 // Change for number posts to display per page
  //   const numPages = Math.ceil(posts.length / postsPerPage)

  //   Array.from({ length: numPages }).forEach((_, i) => {
  //     createPage({
  //       path:
  //         i === 0 ? `/journal/${category}` : `/journal/${category}/${i + 1}`,
  //       component: path.resolve("./src/templates/category.js"),
  //       context: {
  //         limit: postsPerPage,
  //         skip: i * postsPerPage,
  //         numPages,
  //         currentPage: i + 1,
  //       },
  //     })
  //   })
  // })

  // const categories = result.data.categoryGroup.group

  // categories.forEach((category, iCategory) => {
  //   createPage({
  //     path: `/${_.kebabCase(category.fieldValue)}`,
  //     component: categoryTemplate,
  //     context: {
  //       category: category.fieldValue,
  //     },
  //   })
  // })

  // Make Tag Pages
  // const tags = result.data.tagsGroup.group

  // tags.forEach((tag, i) => {
  //   createPage({
  //     path: `/tags/${_.kebabCase(tag.fieldValue)}`,
  //     component: tagTemplate,
  //     context: {
  //       tag: tag.fieldValue,
  //     },
  //   })
  // })
}

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

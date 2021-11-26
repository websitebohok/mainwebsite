import React from "react"
import PropTypes from "prop-types"
import Category from "../../templates/templates-components/CategoryComponents"

const categoryObjectYear = [
  {
    edges: [
      {
        node: {
          fields: {
            slug: "#",
          },
          frontmatter: {
            title: "Hanya Placeholder, jangan diklik ya!",
            date: "Jan 8, 2021",
            category: "esai",
          },
        },
      },
      {
        node: {
          fields: {
            slug: "#",
          },
          frontmatter: {
            title: "Hanya Placeholder, jangan diklik ya!",
            date: "Feb 8, 2021",
            category: "foto",
          },
        },
      },
    ],
    fieldValue: "2021",
  },
  {
    edges: [
      {
        node: {
          fields: {
            slug: "#",
          },
          frontmatter: {
            title: "Hanya Placeholder, jangan diklik ya!",
            date: "Jan 8, 2019",
            category: "esai",
          },
        },
      },
      {
        node: {
          fields: {
            slug: "#",
          },
          frontmatter: {
            title: "Hanya Placeholder, jangan diklik ya!",
            date: "Feb 8, 2019",
            category: "foto",
          },
        },
      },
    ],
    fieldValue: "2019",
  },
]

const categoryObjectLinks = [
  {
    edges: [
      {
        node: {
          fields: {
            slug: "#",
          },
          frontmatter: {
            title: "Hanya Placeholder, jangan diklik ya!",
            date: "Jan 8, 2021",
            category: "pranala",
            path: "#",
          },
        },
      },
      {
        node: {
          fields: {
            slug: "#",
          },
          frontmatter: {
            title: "Hanya Placeholder, jangan diklik ya!",
            date: "Feb 8, 2021",
            category: "pranala",
            path: "#",
          },
        },
      },
    ],
    fieldValue: "google",
  },
  {
    edges: [
      {
        node: {
          fields: {
            slug: "#",
          },
          frontmatter: {
            title: "Hanya Placeholder, jangan diklik ya!",
            date: "Jan 8, 2019",
            category: "pranala",
            path: "#",
          },
        },
      },
      {
        node: {
          fields: {
            slug: "#",
          },
          frontmatter: {
            title: "Hanya Placeholder, jangan diklik ya!",
            date: "Feb 8, 2019",
            category: "pranala",
            path: "#",
          },
        },
      },
    ],
    fieldValue: "medium",
  },
]

const CategoryPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <Category
        title={data.title}
        category={data.category}
        image={getAsset(data.heroImage)}
        imageAlt={data.featuredImageAlt}
        html={widgetFor("body")}
        yearGroup={categoryObjectYear}
        linksGroup={categoryObjectLinks}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CategoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CategoryPagePreview

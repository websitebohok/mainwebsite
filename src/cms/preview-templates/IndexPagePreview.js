import React from "react"
import PropTypes from "prop-types"
import Index from "../../templates/templates-components/IndexComponent"

const indexObject = {
  edges: [
    {
      node: {
        fields: {
          slug: "#",
        },
        frontmatter: {
          title: "This Will Fundamentally Change the Way You Look at Bro",
          description:
            "Ini adalah placeholder untuk halaman index ya. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore sint ut suscipit.",
          date: "Jan 8, 2021",
          category: "esai",
          path: null,
          webname: "kompas",
        },
        timeToRead: 1,
      },
    },
    {
      node: {
        fields: {
          slug: "#",
        },
        frontmatter: {
          title: "The Intriguing Psychology Behind Bro",
          description:
            "Ini adalah placeholder untuk halaman index ya. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aspernatur quod ex eum a modi ab, architecto eius dignissimos reprehenderit!",
          date: "Jan 8, 2021",
          category: "esai",
          path: null,
          webname: "medium",
        },
        timeToRead: 1,
      },
    },
  ],
}

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <Index
        title={data.title}
        description={data.description}
        image={getAsset(data.heroImage)}
        imageAlt={data.featuredImageAlt}
        FeaturedPostQuery={indexObject}
        LatestPostQuery={indexObject}
        html={widgetFor("body")}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview

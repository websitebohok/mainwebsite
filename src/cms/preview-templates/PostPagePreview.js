import React from "react"
import PropTypes from "prop-types"
import Post from "../../templates/templates-components/PostComponents"

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const postObject = [
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
]

const PostPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()

  const location = {
    href: "#",
  }

  if (data) {
    const d = data.date
    const datePreview = `${
      months[d.getMonth()]
    } ${d.getDate()}, ${d.getFullYear()}`

    return (
      <Post
        title={data.title}
        description={data.description}
        image={getAsset(data.heroImage)}
        imageAlt={data.featuredImageAlt}
        html={widgetFor("body")}
        date={datePreview}
        category={data.category}
        author={data.author}
        timeToRead="2"
        location={location}
        similarPost={postObject}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PostPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PostPagePreview

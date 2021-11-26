import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import HomePostRoll from "../../components/HomePostRoll"
import PostHeading from "../../components/PostHeading"
import Seo from "../../components/SEO"
import Content from "../../components/Content"
import { BlogPostStyles } from "../../styles/templates-style/BlogPostStyles"
const _ = require("lodash")

const Post = ({
  SEOimage,
  SEOimageAlt,
  SEOtitle,
  SEOdescription,
  html,
  contentComponent,
  timeToRead,
  date,
  title,
  description,
  category,
  author,
  location,
  similarPost,
}) => {
  const categoryCase = _.kebabCase(category)

  const PostContent = contentComponent || Content

  return (
    <>
      {(SEOtitle || SEOdescription) && (
        <Seo title={SEOtitle} description={SEOdescription} image={SEOimage} />
      )}
      <BlogPostStyles>
        <PostHeading
          date={date}
          title={title}
          category={category}
          description={description}
          author={author}
          timeToRead={timeToRead}
          location={location}
        />

        {html && <PostContent content={html} className="page-content" />}
        <div className="br-line" />
        {category && (
          <p>
            Artikel lainnya dalam kategori{" "}
            <Link to={`/${categoryCase}`}>{_.capitalize(category)}</Link>
          </p>
        )}
        <div className="post-roll">
          {similarPost &&
            similarPost.map(({ node }, index) => (
              <HomePostRoll nodeObj={node} key={`similar-post-${index}`} />
            ))}
        </div>
      </BlogPostStyles>
    </>
  )
}

Post.propTypes = {
  html: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  location: PropTypes.object.isRequired,
  similarPost: PropTypes.array,
}

export default Post

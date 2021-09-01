import React from "react"
import { graphql } from "gatsby"
import Banner from "../components/Banner"
import Seo from "../components/SEO"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const Page = ({ image, imageAlt, SEOtitle, SEOdescription, title, html }) => {
  const firstImg = getImage(image)
  const SEOimage = image ? image.childImageSharp.resize : null

  return (
    <>
      <Seo
        title={SEOtitle}
        description={SEOdescription}
        image={SEOimage}
        article
      />
      <div className="page-standard">
        <Banner content={title} />
        {image && (
          <div className="post-img">
            <GatsbyImage image={firstImg} alt={imageAlt} />
          </div>
        )}
        {html && (
          <div
            className="page-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </>
  )
}

Page.propTypes = {
  image: PropTypes.object,
  imageAlt: PropTypes.string,
  SEOtitle: PropTypes.string,
  SEOdescription: PropTypes.string,
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
}

const PageTemplate = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html, excerpt },
  } = data

  return (
    <Page
      image={frontmatter.featuredImage}
      imageAlt={frontmatter.featuredImageAlt}
      SEOtitle={frontmatter.SEO.SEOtitle}
      SEOdescription={frontmatter.SEO.SEOdescription || excerpt}
      title={frontmatter.title}
      html={html}
    />
  )
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PageTemplate

export const pageQuery = graphql`
  query PageTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        SEO {
          SEOtitle
          SEOdescription
        }
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
        featuredImageAlt
      }
    }
  }
`

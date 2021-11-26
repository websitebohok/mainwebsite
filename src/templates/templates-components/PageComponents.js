import React from "react"
import Banner from "../../components/Banner"
import Seo from "../../components/SEO"
import PropTypes from "prop-types"
import Content from "../../components/Content"

const Page = ({
  image,
  imageAlt,
  SEOtitle,
  SEOdescription,
  title,
  html,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
      {(SEOtitle || SEOdescription) && (
        <Seo title={SEOtitle} description={SEOdescription} />
      )}
      <div className="page-standard">
        <Banner content={title} />
        {html && <PostContent content={html} className="page-content" />}
      </div>
    </>
  )
}

Page.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  SEOtitle: PropTypes.string,
  SEOdescription: PropTypes.string,
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
}

export default Page

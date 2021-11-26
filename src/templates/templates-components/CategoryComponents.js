import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Seo from "../../components/SEO"
import Banner from "../../components/Banner"
import Content from "../../components/Content"
import BlogCategory from "../../components/BlogCategory"

const CategoryStyle = styled.div`
  width: 100%;
  box-sizing: border-box;
`

const Category = ({
  SEOtitle,
  SEOdescription,
  title,
  html,
  contentComponent,
  category,
  linksGroup,
  yearGroup,
}) => {
  const PostContent = contentComponent || Content
  return (
    <>
      {(SEOtitle || SEOdescription) && (
        <Seo title={SEOtitle} description={SEOdescription} />
      )}
      <CategoryStyle>
        <Banner content={title} />
        {html && <PostContent content={html} className="page-content" />}
        <div className="br-line" />
        {(linksGroup || yearGroup) &&
          (category === "pranala" ? (
            <BlogCategory group={linksGroup} category={category} />
          ) : (
            <BlogCategory group={yearGroup} category={category} />
          ))}
      </CategoryStyle>
    </>
  )
}

Category.propTypes = {
  SEOtitle: PropTypes.string,
  SEOdescription: PropTypes.string,
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  linksGroup: PropTypes.array,
  yearGroup: PropTypes.array,
}

export default Category

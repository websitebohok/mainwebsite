import React from "react"
import Banner from "../../components/Banner"
import Content from "../../components/Content"
import HomePostRoll from "../../components/HomePostRoll"
import Seo from "../../components/SEO"
import { IndexPageStyle } from "../../styles/templates-style/IndexPageStyles"
import PropTypes from "prop-types"
// import SearchContext from "../components/SearchContext"

const Index = ({
  SEOtitle,
  SEOdescription,
  title,
  description,
  image,
  imageAlt,
  html,
  contentComponent,
  FeaturedPostQuery,
  LatestPostQuery,
}) => {
  // const [isSearch, setSearch] = useContext(SearchContext)

  // const toggleSearch = () => {
  //   setSearch((isSearch) => !isSearch)
  // }
  // console.log(HomepageStyle.componentStyle.rules[0])

  const PostContent = contentComponent || Content

  return (
    <>
      {(SEOtitle || SEOdescription) && (
        <Seo title={SEOtitle} description={SEOdescription} />
      )}
      <IndexPageStyle>
        <div className="hr-img">
          <img src={image} alt={imageAlt} loading="lazy" />
          <div className="hr-title">
            <Banner content={title} />
            <p>{description}</p>
          </div>
        </div>

        <div className="hp-posts-roll">
          <div className="posts-roll">
            <h6>Artikel Unggulan</h6>
            <div className="st-line" />
            {FeaturedPostQuery &&
              FeaturedPostQuery.edges.map(({ node }, index) => (
                <HomePostRoll nodeObj={node} key={`featured-post-${index}`} />
              ))}
          </div>
          <div className="posts-roll">
            <h6>Artikel Terkini</h6>
            <div className="st-line" />
            {LatestPostQuery &&
              LatestPostQuery.edges.map(({ node }, index) => (
                <HomePostRoll nodeObj={node} key={`latest-post-${index}`} />
              ))}
          </div>
        </div>
        <div className="br-line"></div>
        {html && <PostContent content={html} className="page-content" />}
      </IndexPageStyle>
    </>
  )
}

Index.propTypes = {
  SEOtitle: PropTypes.string,
  SEOdescription: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  html: PropTypes.string,
  FeaturedPostQuery: PropTypes.object.isRequired,
  LatestPostQuery: PropTypes.object.isRequired,
}

export default Index

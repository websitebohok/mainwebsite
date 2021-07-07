import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItem"
import JournalNav from "../components/JournalNav"
import Button from "../components/Button"
import { PagerStyles } from "../styles/JournalStyles"
import Banner from "../components/Banner"

const _ = require("lodash")
const Category = (props) => {
  const { markdownRemark, allMarkdownRemark } = props.data
  const edges = allMarkdownRemark.edges

  const { currentPage, numPages, category } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  const categoryCase = _.kebabCase(category)

  return (
    <>
      <JournalNav />
      <Seo title="Read more about the projects at Bonneville" />
      <Banner content={markdownRemark.frontmatter.title} />
      <p>
        {" "}
        This is the Bohok's Journal. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sit commodi, ex numquam vel qui id ut quia nobis,
        sequi, ab in ea? Qui inventore fugiat, iure eveniet dicta vel nesciunt?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        adipisci veritatis impedit facere, sunt id ipsam dolores consectetur
        perspiciatis nihil unde odio minus qui aut consequatur quasi! Maiores
        illo architecto, adipisci in quae veniam ipsa recusandae commodi
        accusamus tenetur officia cumque natus obcaecati voluptatem non unde ab
        officiis ducimus corrupti?
      </p>
      {edges.map(({ node }, index) => {
        return <BlogItem nodeObj={node} itemKey={`blog-post-${index}`} />
      })}
      {/* Paging controls */}
      {/* If there are multiple pages, show pager */}
      {numPages > 1 && (
        <PagerStyles>
          <div className="btns">
            {!isFirst && (
              <Link to={`/journal/${categoryCase}/${prevPage}`} rel="prev">
                <Button text="Previous" />
              </Link>
            )}
            {!isLast && (
              <Link to={`/journal/${categoryCase}/${nextPage}`} rel="next">
                <Button text="Next" />
              </Link>
            )}
          </div>
          <div className="numbers">
            {Array.from({ length: numPages }, (item, i) => (
              <Link
                key={`pagination-numbers${i + 1}`}
                to={`/journal/${categoryCase}/${i === 0 ? "" : i + 1}`}
              >
                {i + 1}
              </Link>
            ))}
          </div>
        </PagerStyles>
      )}
    </>
  )
}

export default Category

export const journalQuery = graphql`
  query ($category: String, $skip: Int!, $limit: Int!) {
    markdownRemark(
      frontmatter: {
        templateKey: { eq: "category" }
        category: { eq: $category }
      }
    ) {
      html
      frontmatter {
        path
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "post" }
          category: { in: [$category] }
        }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            path
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

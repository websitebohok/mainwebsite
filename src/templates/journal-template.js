import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItem"
import Button from "../components/Button"
import { PagerStyles } from "../styles/JournalStyles"
import Banner from "../components/Banner"

const JournalTemplate = (props) => {
  const { edges } = props.data.allMarkdownRemark

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <>
      <Seo title="Read more about the projects at Bonneville" />
      <Banner content="Jurnal Bohok" />
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
        return <BlogItem nodeObj={node} index={index} />
      })}
      {/* Paging controls
        If there are multiple pages, show pager */}
      {numPages > 1 && (
        <PagerStyles>
          <div className="btns">
            {!isFirst && (
              <Link to={`/journal/${prevPage}`} rel="prev">
                <Button text="Previous" />
              </Link>
            )}
            {!isLast && (
              <Link to={`/journal/${nextPage}`} rel="next">
                <Button text="Next" />
              </Link>
            )}
          </div>
          <div className="numbers">
            {Array.from({ length: numPages }, (_, i) => (
              <Link
                key={`pagination-numbers${i + 1}`}
                to={`/journal/${i === 0 ? "" : i + 1}`}
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

export default JournalTemplate

export const journalQuery = graphql`
  query journalQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YY")
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

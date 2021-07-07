import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItem"
import JournalNav from "../components/JournalNav"
import Button from "../components/Button"
import { PagerStyles } from "../styles/JournalStyles"
import Banner from "../components/Banner"

const JournalTemplate = ({ data }) => {
  const { allMarkdownRemark } = data

  return (
    <>
      <JournalNav />
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
      {allMarkdownRemark.edges.map(({ node }, index) => {
        return <BlogItem nodeObj={node} index={index} />
      })}
    </>
  )
}

export default JournalTemplate

export const journalQuery = graphql`
  query journalQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "category" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`

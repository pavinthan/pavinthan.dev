import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <div key={node.id} className="my-6">
              <Link to={node.frontmatter.path}>
                <h3 className="font-bold text-2xl color-header">
                  {node.frontmatter.title}
                </h3>
                <div className="flex text-sm text-gray-600">
                  <h5>{node.frontmatter.date}</h5>
                  <h5 className="ml-1">- {node.fields.readingTime.text}</h5>
                </div>
                <p>{node.frontmatter.description}</p>
              </Link>
            </div>
          ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`

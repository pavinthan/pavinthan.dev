import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="mt-6">
        <h1 className="font-bold text-2xl color-header">
          {post.frontmatter.title}
        </h1>
        <h3 className="text-gray-600">
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </h3>
        <div
          className="mt-6 blog-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

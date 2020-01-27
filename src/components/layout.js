/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="container flex flex-1 flex-col max-w-2xl mx-auto">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="flex flex-1 flex-col p-3">{children}</main>
        <footer className="flex justify-center p-3">
          © {new Date().getFullYear()}, Built with
          <a className="ml-1" href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

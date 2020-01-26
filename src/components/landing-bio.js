import React from "react"
import { StaticQuery, graphql } from "gatsby"

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <div className="flex flex-1 justify-center items-center">
        <div className="text-center">
          <h1 className="font-bold leading-none md:text-4xl text-2xl">
            Hi, I'm {data.site.siteMetadata.title}
          </h1>
          <p className="md:text-2xl text-gray-600">{data.site.siteMetadata.subtitle}</p>
        </div>
      </div>
    )}
  />
)

export default LandingBio

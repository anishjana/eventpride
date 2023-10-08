import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../utils/normalize.css"
import "../utils/css/screen.css"
import { subPageImages } from "../constants/index"
import Card from "../components/Card"

const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const siteLogo = data.site.siteMetadata.logo
  const subPages = data.allDataJson
  console.log(siteLogo)

  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h1 className="mb-0">{siteTitle}</h1>
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
        </header>
      )}
      <div className="post-feed">
        {subPages.edges.map(pages => {
          postCounter++

          return (
            <Card
              key={postCounter}
              count={postCounter}
              data={pages}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }

    allDataJson {
      edges {
        node {
          name
          thumbnail {
            childImageSharp {
              fluid {
                originalImg
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)

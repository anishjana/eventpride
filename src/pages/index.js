import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import Card from "../components/card"
import PlaceHolder from "../components/placeholder"

const Index = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const subPages = data.allDataJson
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Welcome"
        keywords={[
          `event`,
          `birthday`,
          `wedding`,
          `planning`,
          `decor`,
          `decoration`,
          `event planning`,
          `event management`,
          `wedding cards`,
          `party`,
          `catering`,
        ]}
      />
      <PlaceHolder
        title={siteTitle}
        subtitle={data.site.siteMetadata.description}
        image={data.file.childImageSharp.fluid}
      ></PlaceHolder>

      <div className="bg-grey pt-6">
        <h3 className="text-center my-4vw">Events that we organize!</h3>

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

    file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Index location={props.location} props data={data} {...props} />
    )}
  />
)

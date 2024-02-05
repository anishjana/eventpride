import React from "react"
import { Link } from "gatsby"

function Card(props) {
  // const image = useStaticQuery(graphql`
  // query ImageQuery {
  //     file(absolutePath: {eq: "/${props.data.regex}/"}) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  //   const data = useStaticQuery(graphql`
  //   query HeaderQuery {
  //     file(absolutePath: {eq: "/${props.data.regex}/"}) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  const image = props.data.node.thumbnail.childImageSharp.fluid.originalImg
  const pageName = props.data.node.name

  return (
    <article
      className={`post-card  ${props.postClass} ${
        image ? `with-image` : `no-image`
      }`}
      style={
        image && {
          backgroundImage: `url(${image})`,
        }
      }
    >
      <Link className="post-card-link cursor-pointer" to="/">
        <div className="post-card-content">
          <h2 className="post-card-title">{pageName}</h2>
        </div>
      </Link>
    </article>
  )
}

export default Card

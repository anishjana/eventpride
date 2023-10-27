import React from "react"

import Img from "gatsby-image"
export default function PlaceHolder(props) {
  const { title, subtitle, image } = props
  return (
    <>
      <header className={`page-head pt-10px`}>
        <Img fluid={image} style={{ width: "100%", height: "auto" }}></Img>
        <span className={"text-black absolute ml-12 flex flex-col items-start"}>
          {title && <h1 className="mb-0">{title}</h1>}
          {subtitle && (
            <h2
              className={`page-head-title ${
                title ? "text-inherit" : "text-6xl"
              }`}
            >
              {subtitle}
            </h2>
          )}
        </span>
      </header>
    </>
  )
}

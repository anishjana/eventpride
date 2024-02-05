import React from "react"
import Layout from "./layout"

export default function PageHeader(props) {
  const { title, subtitle, mode } = props

  return (
    <>
      <header
        className={`page-head ${mode === "black" ? "bg-black" : "inherit"} ${
          title ? "pt-6vw" : "py-10vw"
        }`}
      >
        <span className={mode === "black" ? "text-gold" : "text-black"}>
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

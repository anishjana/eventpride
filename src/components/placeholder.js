import React from "react"
import { useGSAP } from "@gsap/react"
import Img from "gatsby-image"
import { gsap } from "gsap"

export default function PlaceHolder(props) {
  const { title, subtitle, image } = props

  useGSAP(() => {
    // eslint-disable-next-line
    let tl = gsap.timeline()
    tl.from("h1", {
      duration: 1,
      yPercent: 100,
      opacity: 0,
      delay: 1,
      ease: "power4",
      stagger: 0.1,
    })
    tl.from("h2", {
      duration: 1.2,
      yPercent: 100,
      opacity: 0,
      ease: "power4",
      stagger: 0.1,
    })
  })
  return (
    <>
      <header className={`page-head pt-10px`}>
        <Img fluid={image} style={{ width: "100%", height: "auto" }}></Img>
        <span
          className={"text-black absolute ml-12 flex flex-col items-start "}
        >
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

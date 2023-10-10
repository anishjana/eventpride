import React from "react"
import PageHeader from "../components/pageHeader"
import Helmet from "react-helmet"

export default function Contact() {
  return (
    <>
      <Helmet>
        <script src="https://cdn.lordicon.com/bhenfmcm.js" />
      </Helmet>
      <PageHeader subtitle="Say Hello!" mode="black"></PageHeader>
      <main className="pt-10vw px-5 w-full grid grid-flow-col grid-cols-3">
        <div className="contact-section map p-6">map</div>
        <div className="contact-section details p-6">
          <div className="w-50% flex flex-col justify-between gap-10">
            <span className="phone">
              <a href="tel:+918918227839" className="flex items-center">
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/tftaqjwp.json"
                  trigger="hover"
                  target=".phone"
                  colors="primary:#121331"
                  style={{ width: "25px" }}
                ></lord-icon>{" "}
                &nbsp; +918918227839
              </a>
            </span>
            <span className="whatsapp">
              <a
                href="https://api.whatsapp.com/send?phone=9734430937"
                className="flex items-center"
                target="='_blank"
              >
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/pkmkagva.json"
                  trigger="hover"
                  target=".whatsapp"
                  colors="primary:#121331"
                  style={{ width: "25px" }}
                ></lord-icon>{" "}
                &nbsp; +919734430937
              </a>
            </span>
            <span className="email">
              <a
                href="mailto:contact@eventpride.in"
                className="flex items-center"
              >
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/ehfubvwr.json"
                  trigger="hover"
                  target=".email"
                  colors="primary:#121331"
                  style={{ width: "25px" }}
                ></lord-icon>{" "}
                &nbsp; contact@eventpride.in
              </a>
            </span>
          </div>
        </div>
        <div className="contact-section query p-6">query</div>
      </main>
    </>
  )
}

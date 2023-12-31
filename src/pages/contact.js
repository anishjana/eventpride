import React from "react"
import PageHeader from "../components/pageHeader"
import Helmet from "react-helmet"
import EmbedMap from "../components/embedMap"
import { Link } from "gatsby"
import { useHasBeenVisible } from "../utils/js/useVisibility"

export default function Contact() {
  const trigger = "loop-on-hover"
  const preload = React.useRef()
  const loaded = useHasBeenVisible(preload)
  return (
    <div className="min-h-screen p-10 pb-4">
      <Helmet>
        <script src="https://cdn.lordicon.com/lordicon-1.1.0.js" />
      </Helmet>
      <div className="relative ">
        <Link to={`/`}>
          <i className="arrow left absolute top-12 left-10"></i>
        </Link>

        <PageHeader subtitle="Say Hello!" mode="black"></PageHeader>
      </div>
      <main className="contact-main pt-7vw px-5 w-full grid grid-flow-col min:grid-cols-3 break:grid-flow-row break:grid-rows-layout  ">
        <div className="contact-section map p-6">
          {/* <Map></Map> */}
          {loaded ? <EmbedMap /> : <p ref={preload}>Loading...</p>}

          {/* <EmbedMap></EmbedMap> */}
        </div>
        <div className="contact-section details p-6">
          <h2 className="mb-14 mt-2">Reach us out!</h2>
          <div className="w-50% flex flex-col justify-between gap-10">
            <span className="phone">
              <a href="tel:+918918227839" className="flex items-center">
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/srsgifqc.json"
                  trigger={trigger}
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
                  src="https://cdn.lordicon.com/ayhtotha.json"
                  trigger={trigger}
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
                  src="https://cdn.lordicon.com/xtzvywzp.json"
                  trigger={trigger}
                  target=".email"
                  colors="primary:#121331"
                  style={{ width: "25px" }}
                ></lord-icon>{" "}
                &nbsp; contact@eventpride.in
              </a>
            </span>
            <span className="address">
              <a
                href="https://www.google.com/maps/place/Eventpride/@21.7782973,87.7467886,20.03z/data=!4m6!3m5!1s0x3a032705987fc727:0xae8917ef2241ae1e!8m2!3d21.7782729!4d87.7468605!16s%2Fg%2F11tdqgqn6x?hl=en-GB&entry=ttu"
                className="flex items-start"
                target="_blank"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/wmwqvixz.json"
                  trigger={trigger}
                  target=".address"
                  colors="primary:#121331"
                  style={{ width: "32px" }}
                ></lord-icon>
                <p className="ml-3 mt-2">
                  Santanird, Hatabari, Rathtala, Contai, West Bengal, 721401,
                  India
                </p>
              </a>
            </span>
          </div>
        </div>
        <div className="contact-section h-fit query p-6 bg-grey flex flex-col min-h-0">
          <h2 className="mb-14 mt-2 break:mb-5">Have a query!</h2>
          <form method="post" action="#">
            <div className="row gtr-uniform break:mb-1">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="form-name"
                  id="form-name"
                  defaultValue=""
                  placeholder="Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="tel"
                  name="form-email"
                  id="form-email"
                  defaultValue=""
                  placeholder="Phone"
                />
              </div>
              {/* Break */}
              {/* <div className="col-12">
                <select name="form-category" id="form-category">
                  <option value>- Category -</option>
                  <option value={1}>Manufacturing</option>
                  <option value={1}>Shipping</option>
                  <option value={1}>Administration</option>
                  <option value={1}>Human Resources</option>
                </select>
              </div> */}
              {/* Break */}
              {/* <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-low"
                  name="demo-priority"
                  defaultChecked
                />
                <label htmlFor="demo-priority-low">Low</label>
              </div> */}
              {/* <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-normal"
                  name="demo-priority"
                />
                <label htmlFor="demo-priority-normal">Normal</label>
              </div>
              <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-high"
                  name="demo-priority"
                />
                <label htmlFor="demo-priority-high">High</label>
              </div> */}
              {/* Break */}
              {/* <div className="col-6 col-12-small">
                <input type="checkbox" id="demo-copy" name="demo-copy" />
                <label htmlFor="demo-copy">Email me a copy</label>
              </div> */}
              {/* <div className="col-6 col-12-small">
                <input
                  type="checkbox"
                  id="demo-human"
                  name="demo-human"
                  defaultChecked
                />
                <label htmlFor="demo-human">I am a human</label>
              </div> */}
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows={4}
                  defaultValue={""}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions break:justify-between">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

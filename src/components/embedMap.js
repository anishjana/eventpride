import React from "react"

export default function EmbedMap() {
  return (
    <div className="mapouter h-full w-full">
      <div className="gmap_canvas h-full w-full">
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=eventpride%20Kanthi,%20Contai,%20West%20Bengal%20721401&t=&z=19&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <a href="https://embedgooglemap.net/124/"></a>
        <br />
      </div>
    </div>
  )
}

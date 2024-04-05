import React from "react"
import {
  GoogleMap,
  Marker,
  useLoadScript,
  useJsApiLoader,
} from "@react-google-maps/api"
import { useMemo } from "react"
import logo from "../../content/assets/ep-logo.png"

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.GATSBY_GOOGLE_API_KEY}`,
  })
  const center = useMemo(() => ({ lat: 21.77828, lng: 87.74688 }), [])
  console.log("KEY", process.env.GATSBY_GOOGLE_API_KEY)
  return (
    <div className="w-full h-full">
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={20}
        >
          <Marker
            position={center}
            icon={{
              url: logo,
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        </GoogleMap>
      )}
    </div>
  )
}

export default Map

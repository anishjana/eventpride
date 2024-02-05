import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import PageHeader from "../components/pageHeader"
import { Link } from "gatsby"

const renderVideo = item => {
  return (
    <div className="video-container-gallery flex justify-center">
      <video autoPlay muted loop width="100%" src={item.original}></video>
    </div>
  )
}

export default function Gallery() {
  const images = [
    {
      original: `./gallery/1.jpg`,
      thumbnail: `./gallery/1.jpg`,
    },
    {
      original: `./gallery/2.jpg`,
      thumbnail: `./gallery/2.jpg`,
    },
    {
      original: `./gallery/3.jpg`,
      thumbnail: `./gallery/3.jpg`,
    },
    {
      original: `./gallery/4.jpg`,
      thumbnail: `./gallery/4.jpg`,
    },
    {
      original: `./gallery/5.jpg`,
      thumbnail: `./gallery/5.jpg`,
    },
    {
      original: `./gallery/6.mp4`,
      thumbnail: `./gallery/wedding.jpg`,

      renderItem: renderVideo,
    },
    {
      original: `./gallery/7.jpg`,
      thumbnail: `./gallery/7.jpg`,
    },
    {
      original: `./gallery/8.jpg`,
      thumbnail: `./gallery/8.jpg`,
    },
    {
      original: `./gallery/9.jpg`,
      thumbnail: `./gallery/9.jpg`,
    },
    {
      original: `./gallery/11.jpg`,
      thumbnail: `./gallery/11.jpg`,
    },
    {
      original: `./gallery/12.jpg`,
      thumbnail: `./gallery/12.jpg`,
    },
    {
      original: `./gallery/13.jpg`,
      thumbnail: `./gallery/13.jpg`,
    },
    {
      original: `./gallery/14.jpg`,
      thumbnail: `./gallery/14.jpg`,
    },
    {
      original: `./gallery/15.jpg`,
      thumbnail: `./gallery/15.jpg`,
    },
  ]

  return (
    <div className="min-h-screen p-10 pb-4">
      <div className="relative mb-4">
        <Link to={`/`}>
          <i className="arrow left absolute top-12 left-10"></i>
        </Link>

        <PageHeader
          subtitle="We help in creating memories!"
          mode="black"
        ></PageHeader>
      </div>
      <ImageGallery
        autoPlay={true}
        slideInterval={500}
        slideDuration={2000}
        showPlayButton={false}
        items={images}
        // onImageLoad={_onImageLoad}
      />
    </div>
  )
}

import Image from 'next/image'
import React from 'react'

// Reusable Image Component
const InstagramImage = ({ src, alt }) => (
  <div className="flex-shrink-0">
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      className="rounded-lg object-cover" // You can style the images here (e.g., rounded corners)
    />
  </div>
)

function Instagram() {
  const images = [
    '/component1.svg',
    '/component2.svg',
    '/component3.svg',
    '/component4.svg',
    '/component5.svg',
  ]
  
  return (
    <div className="main mt-20">
      <h1 className="text-5xl text-center font-bodoni mb-10">Purity on Instagram</h1>
      
      {/* Flex container with responsive layout */}
      <div className="flex justify-center gap-6 flex-wrap mx-4 mt-10">
        {images.map((src, index) => (
          <InstagramImage key={index} src={src} alt={`Instagram image ${index + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default Instagram

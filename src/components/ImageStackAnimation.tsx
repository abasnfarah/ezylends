'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const ImageStack = ({
  images,
  cycleInterval = 3000
}: {
  images: string[]
  cycleInterval?: number
}) => {
  const [visibleImages, setVisibleImages] = useState<string[]>([])

  useEffect(() => {
    setVisibleImages(images.slice(0, 3)) // Initialize with the first three images

    const cycleImages = () => {
      setVisibleImages((prevImages) => {
        // Determine the next set of images, cycling back to the start if necessary
        const nextIndex = images.indexOf(prevImages[prevImages.length - 1]) + 1
        const nextImage = images[nextIndex % images.length]
        return [...prevImages.slice(1), nextImage]
      })
    }

    const intervalId = setInterval(cycleImages, cycleInterval)

    return () => clearInterval(intervalId) // Clear interval on component unmount
  }, [images, cycleInterval])

  return (
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <AnimatePresence initial={false}>
        {visibleImages.map((img, index) => (
          <motion.img
            key={img}
            src={img}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, x: index * 30, y: index * 30 }} // Adjust x and y to control the stacking offset
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100px', // Set a fixed width or adjust as needed
              height: 'auto',
              zIndex: -index // Ensures that the last image in the array is at the bottom of the stack
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ImageStack

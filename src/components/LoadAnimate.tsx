'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import type { ReactNode } from 'react'

const LoadAnimate = ({ children }: { children: ReactNode }) => {
  const delayIncrement = 0.2 // Delay increment between each child

  return (
    <AnimatePresence>
      {React.Children.map(children, (child, index) => {
        // Ensure the child is a valid React element before wrapping it with motion.div
        if (React.isValidElement(child)) {
          return (
            <motion.div
              key={index} // Using index as key; ideally, use a more stable identifier if available
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * delayIncrement }}
            >
              {child}
            </motion.div>
          )
        }
        return child // If the child is not a valid React element, return it as is
      })}
    </AnimatePresence>
  )
}

export default LoadAnimate

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import type { ReactNode } from 'react'

const LoadAnimate = ({ children }: { children: ReactNode }) => {
  const delayIncrement = 0.2

  return (
    <AnimatePresence>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * delayIncrement }}
            >
              {child}
            </motion.div>
          )
        }
        return child
      })}
    </AnimatePresence>
  )
}

export default LoadAnimate

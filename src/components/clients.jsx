'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { id: 1, content: 'Item 1' },
  { id: 2, content: 'Item 2' },
  { id: 3, content: 'Item 3' },
  { id: 4, content: 'Item 4' },
  { id: 5, content: 'Item 5' },
  { id: 6, content: 'Item 6' },
]

export default function ResponsiveCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }, [])

  const resetAutoPlay = useCallback(() => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 100)
  }, [])

  useEffect(() => {
    let intervalId

    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 3000)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isAutoPlaying, nextSlide])

  const handlePrevClick = () => {
    prevSlide()
    resetAutoPlay()
  }

  const handleNextClick = () => {
    nextSlide()
    resetAutoPlay()
  }

  const getVisibleItems = () => {
    const visibleItems = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % items.length
      visibleItems.push(items[index])
    }
    return visibleItems
  }

  return (
    <div className="w-full mt-40 bg-black">
      {/* Mobile Carousel */}
      <div className="relative overflow-hidden md:hidden flex justify-center">
        <motion.button
          onClick={handlePrevClick}
          className=" transform  ml-4 bg-primary rounded-full p-2 my-4 mr-auto shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>
        <div className="flex">
          {getVisibleItems().map((item) => (
            <div key={item.id} className="w-1/3 flex-shrink-0 p-2">
              <div className="bg-black py-4 px-8 rounded-lg h-full flex items-center justify-center">
                {item.content}
              </div>
            </div>
          ))}
        </div>
        <motion.button
          onClick={handleNextClick}
          className="ml-auto mr-4 my-4 transform  bg-primary rounded-full p-2 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-6 gap-4 max-w-4xl mx-auto">
        {items.map((item) => (
          <div key={item.id} className="bg-black p-4 rounded-lg flex items-center justify-center">
            {item.content}
          </div>
        ))}
      </div>
    </div>
  )
}


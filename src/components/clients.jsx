'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { id: 1, src: '/fan.jpeg', alt:'Fan Courier'},
  { id: 2, alt: 'Client2'},
  { id: 3, alt: 'Client3'},
  { id: 4, alt: 'Client4' },
  { id: 5, alt: 'Client5'},
  { id: 6, alt: 'Client6'},
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
    <div className="w-full mt-40 bg-black text-white">
      {/* Mobile Carousel */}
      <div className="relative overflow-hidden lg:hidden flex justify-center h-32">
        <motion.button
          onClick={handlePrevClick}
          className=" transform  ml-4 rounded-lg border-secundary border-2 pr-[1.5px] my-11 mr-auto shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>
        <div className="flex justify-between w-full mx-5 pt-2">
          {getVisibleItems().map((item) => (
            <div key={item.id} className="p-2">
              
                <img className='flex-mx-auto' src={item.src} alt={item.alt} />
             
            </div>
          ))}
        </div>
        <motion.button
          onClick={handleNextClick}
          className="ml-auto mr-4 my-11 transform rounded-lg pl-[1.5px] shadow-md border-2 border-secundary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-6 gap-16 max-w-6xl  mx-10">
        {items.map((item) => (
          <div key={item.id} className="">
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}


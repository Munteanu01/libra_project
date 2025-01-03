'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { image: '/pexels-jakubzerdzicki-20614571.jpg', alt: 'Security System 1', text: 'Sisteme complete de detectie incendiu' },
  { image: 'pexels-onemorecoffee-179993.jpg', alt: 'Security System 2', text: 'Sisteme de Supraveghere' },
  { image: '', alt: 'Security System 3', text: 'Example' },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const touchStart = useRef(0)
  const touchEnd = useRef(0)
  const timerRef = useRef(null)

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    touchEnd.current = e.changedTouches[0].clientX
    if (touchStart.current - touchEnd.current > 50) goToNextSlide()
    if (touchEnd.current - touchStart.current > 50) goToPrevSlide()
  }

  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
  }

  useEffect(() => {
    startAutoSlide()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    startAutoSlide()
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
    startAutoSlide()
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    startAutoSlide()
  }

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section
      className="relative h-screen bg-gray-900 text-white overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Asigură-ți spațiul cu tehnologie de ultimă generație<span className='text-secundary'>.</span>
        </h1>
        <div className="mt-8 h-8">
          <motion.p
            key={currentSlide} // Re-animate on slide change
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={textVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xl font-semibold"
          >
            {slides[currentSlide].text}
          </motion.p>
        </div>
      </div>

      {/* Slide indicators for mobile */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Buttons for navigation on larger screens */}
      <div className="hidden lg:flex absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={goToPrevSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="hidden lg:flex absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={goToNextSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}

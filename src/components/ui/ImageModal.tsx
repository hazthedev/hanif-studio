'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2, ExternalLink } from 'lucide-react'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  initialIndex?: number
  title?: string
  description?: string
  projectUrl?: string
}

const ImageModal = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  title = '',
  description = '',
  projectUrl = ''
}: ImageModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isZoomed, setIsZoomed] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Reset index and zoom when modal opens with new images
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
      setIsZoomed(false)
      setImageError(false)
    }
  }, [isOpen, initialIndex])

  // Reset error when changing images
  useEffect(() => {
    setImageError(false)
  }, [currentIndex])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowLeft':
          navigatePrevious()
          break
        case 'ArrowRight':
          navigateNext()
          break
        case 'Escape':
          onClose()
          break
        case ' ':
          e.preventDefault()
          toggleZoom()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, isZoomed])

  const navigatePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const navigateNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsZoomed(false)
    setImageError(false)
  }, [])

  const toggleZoom = useCallback(() => {
    setIsZoomed((prev) => !prev)
  }, [])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  
  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      navigateNext()
    }
    if (isRightSwipe) {
      navigatePrevious()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleBackdropClick}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

        {/* Modal Content */}
        <div className="relative w-full h-full flex flex-col max-w-7xl mx-auto p-4">
          {/* Header */}
          <motion.div
            className="flex items-center justify-between text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex-1">
              {title && (
                <h3 className="text-lg md:text-xl font-bold font-display mb-1">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-gray-300 text-xs md:text-sm">
                  {description}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-3">
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={20} className="text-white" />
                </a>
              )}

  
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                title="Close (Esc)"
              >
                <X size={20} className="text-white" />
              </button>
            </div>
          </motion.div>

          {/* Main Image Container */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden">
            {/* Previous Button */}
            {images.length > 1 && (
              <motion.button
                onClick={navigatePrevious}
                className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Previous (←)"
              >
                <ChevronLeft size={24} className="text-white" />
              </motion.button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
              <motion.button
                onClick={navigateNext}
                className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Next (→)"
              >
                <ChevronRight size={24} className="text-white" />
              </motion.button>
            )}

            {/* Image Display */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="relative w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Display */}
                  <div className={`
                    relative rounded-lg overflow-hidden
                    max-w-full max-h-[90vh]
                    w-full h-full flex items-center justify-center
                  `}>
                    {images[currentIndex]?.includes('/api/placeholder/') || imageError ? (
                      // Placeholder for API placeholder images or error state
                      <div
                        className="bg-gradient-to-br from-primary-coral/20 to-primary-blue/20 border border-white/10 rounded-lg flex items-center justify-center w-full h-full md:max-w-4xl md:max-h-[70vh] cursor-zoom-in"
                        onClick={toggleZoom}
                      >
                        <div className="text-center p-8">
                          <div className="w-24 h-24 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                            <Maximize2 size={48} className="text-white/50" />
                          </div>
                          <p className="text-white/70 text-base mb-2">
                            {imageError ? 'Image not available' : `Project Image ${currentIndex + 1}`}
                          </p>
                          <p className="text-white/30 text-xs">Click to {isZoomed ? 'zoom out' : 'zoom in'}</p>
                        </div>
                      </div>
                    ) : (
                      // Real image display
                      <img
                        src={images[currentIndex]}
                        alt={`${title} - Image ${currentIndex + 1}`}
                        className={`
                          max-w-full max-h-[70vh] object-contain rounded-lg
                          ${isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}
                          transition-transform duration-300 origin-center
                        `}
                        onClick={toggleZoom}
                        onError={() => setImageError(true)}
                      />
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Image Indicators */}
          {images.length > 1 && (
            <motion.div
              className="flex justify-center space-x-2 mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </motion.div>
          )}

          {/* Instructions */}
          <motion.div
            className="mt-4 text-center text-white/50 text-[10px] space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="hidden sm:inline">← → Navigate</span>
            <span className="sm:hidden">Swipe Navigate</span>
            <span>Click/Space Zoom</span>
            <span>Esc Close</span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ImageModal
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TypewriterTextProps {
  words: string[]
  className?: string
  wordChangeDelay?: number
  transitionDuration?: number
  pauseDuration?: number
  typingSpeed?: number
  deletingSpeed?: number
  cursorStyle?: 'pipe' | 'underscore' | 'block'
  variant?: 'rotate' | 'delete' | 'typing'
}

const TypewriterText = ({
  words,
  className = '',
  wordChangeDelay = 2500,
  transitionDuration = 0.4,
  pauseDuration = 1500,
  typingSpeed = 100,
  deletingSpeed = 50,
  cursorStyle = 'pipe',
  variant = 'delete'
}: TypewriterTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  // Simple rotation variant (original behavior)
  if (variant === 'rotate') {
    return (
      <span className={`relative ${className}`}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: transitionDuration,
              ease: 'easeInOut'
            }}
            className="inline-block"
          >
            {words[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
        <CursorComponent style={cursorStyle} />
      </span>
    )
  }

  // Delete & retype variant
  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const typingTimer = setTimeout(() => {
      if (isTyping && !isPaused) {
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        } else {
          setIsPaused(true)
          setIsTyping(false)
          setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
          }, pauseDuration)
        }
      }
    }, typingSpeed)

    const deletingTimer = setTimeout(() => {
      if (isDeleting && !isPaused) {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setIsTyping(true)
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        }
      }
    }, deletingSpeed)

    return () => {
      clearTimeout(typingTimer)
      clearTimeout(deletingTimer)
    }
  }, [
    displayedText,
    isTyping,
    isDeleting,
    isPaused,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration
  ])

  // Typing animation variant (without delete)
  if (variant === 'typing') {
    return (
      <span className={`relative ${className}`}>
        <AnimatePresence mode="wait">
          <motion.span
            key={`${currentWordIndex}-${displayedText}`}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            {displayedText}
          </motion.span>
        </AnimatePresence>
        <CursorComponent style={cursorStyle} />
      </span>
    )
  }

  return (
    <span className={`relative ${className}`}>
      <span className="inline-block">
        {displayedText}
      </span>
      <CursorComponent
        style={cursorStyle}
        isTyping={isTyping || isDeleting}
        isPaused={isPaused}
      />
    </span>
  )
}

interface CursorComponentProps {
  style: 'pipe' | 'underscore' | 'block'
  isTyping?: boolean
  isPaused?: boolean
}

const CursorComponent = ({
  style,
  isTyping = true,
  isPaused = false
}: CursorComponentProps) => {
  const baseClasses = "inline-block ml-1"

  if (style === 'pipe') {
    return (
      <motion.span
        className={`${baseClasses} w-0.5 bg-current`}
        animate={{
          opacity: isTyping || isPaused ? [1, 0, 1] : 0
        }}
        transition={{
          duration: 0.8,
          repeat: isTyping || isPaused ? Infinity : 0,
          ease: 'easeInOut'
        }}
        style={{
          height: '1.2em'
        }}
      />
    )
  }

  if (style === 'underscore') {
    return (
      <motion.span
        className={`${baseClasses} w-3 h-0.5 bg-current rounded-full`}
        animate={{
          opacity: isTyping || isPaused ? [1, 0, 1] : 0
        }}
        transition={{
          duration: 0.8,
          repeat: isTyping || isPaused ? Infinity : 0,
          ease: 'easeInOut'
        }}
      />
    )
  }

  if (style === 'block') {
    return (
      <motion.span
        className={`${baseClasses} w-3 bg-current rounded-sm`}
        animate={{
          opacity: isTyping || isPaused ? [1, 0.3, 1] : 0
        }}
        transition={{
          duration: 0.8,
          repeat: isTyping || isPaused ? Infinity : 0,
          ease: 'easeInOut'
        }}
        style={{
          height: '1.2em'
        }}
      />
    )
  }

  return null
}

export default TypewriterText
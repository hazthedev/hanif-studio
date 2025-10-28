'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const smoothScroll = (targetId: string) => {
  const element = document.getElementById(targetId.replace('#', ''))
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center py-1 justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">HS</span>
            </div>
            <span className="font-display text-xl font-bold text-dark-navy">
              Hanif Studio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => smoothScroll(item.href)}
                className="text-dark-navy hover:text-primary-blue transition-colors font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => smoothScroll('#contact')}
            className="hidden md:block btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Project
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${
            isMenuOpen ? 'backdrop-blur-lg rounded-lg bg-white/95 shadow-2xl' : ''
          }`}
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut'
          }}
        >
          <div className="py-6 px-4 space-y-4 border-t border-gray-100">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => {
                  smoothScroll(item.href)
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left text-dark-navy hover:text-primary-blue transition-colors font-medium py-3 px-4 rounded-lg hover:bg-primary-coral/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => {
                smoothScroll('#contact')
                setIsMenuOpen(false)
              }}
              className="btn-primary w-full bg-gradient-to-r from-primary-coral to-secondary-coral hover:from-coral-600 hover:to-secondary-coral shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Start Project
            </motion.button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header
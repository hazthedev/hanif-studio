'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'
import TypewriterText from '@/components/ui/TypewriterText'

const Hero = () => {
  const rotatingWords = [
    'Designer',
    'Creator',
    'Storyteller',
    'Visionary',
    'Problem Solver',
    'Brand Builder',
    'Visual Artist'
  ]

  const stats = [
    { label: 'Projects Completed', value: '150+' },
    { label: 'Happy Clients', value: '100+' },
    { label: 'Years Experience', value: '8+' },
    { label: 'Design Awards', value: '12' },
  ]

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-cream via-white to-light-coral">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--primary-blue) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, var(--primary-coral) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary-blue/10 text-primary-blue
                        px-4 py-2 rounded-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star size={16} className="fill-current" />
              <span className="text-sm font-medium">Award-Winning Design Studio</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-navy
                           leading-tight mb-6">
                I am a
              <TypewriterText
                words={rotatingWords}
                className="block text-primary-blue min-h-[1.2em]"
                variant="delete"
                cursorStyle="pipe"
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={1500}
              />
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-6"
              >
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-coral
                             leading-tight">
                  We Create
                  <span className="block">
                    Brand Identity & Visual Design
                  </span>
                </h2>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Transform your business with compelling brand identities and visual product designs
                that captivate audiences and drive results.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <motion.button
                className="btn-secondary flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play
                  size={20}
                  className="mr-2 group-hover:scale-110 transition-transform"
                />
                Watch Our Work
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white
                               flex items-center justify-center text-xs font-medium text-dark-navy"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-text-muted">
                    Trusted by 100+ happy clients
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Main Visual Element */}
            <motion.div
              className="relative w-full h-96 lg:h-full min-h-[500px] rounded-2xl
                       bg-gradient-to-br from-primary-blue to-primary-coral
                       shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              {/* Placeholder for hero visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto flex items-center justify-center">
                    <Star size={48} className="text-white" />
                  </div>
                  <p className="text-2xl font-display font-bold">Visual Portfolio</p>
                  <p className="text-white/80">Showcasing our best work</p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 bg-accent-orange rounded-xl
                         shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <span className="text-white font-bold text-xl">8+</span>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-10 w-16 h-16 bg-pale-azure rounded-xl
                         shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              >
                <span className="text-dark-navy font-bold text-lg">A+</span>
              </motion.div>
            </motion.div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-8 grid grid-cols-2 gap-4">
              {stats.slice(0, 4).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white rounded-xl shadow-lg p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + index * 0.1
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl font-bold text-primary-blue">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary-blue rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-primary-blue rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
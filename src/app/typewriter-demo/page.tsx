'use client'

import { motion } from 'framer-motion'
import TypewriterText from '@/components/ui/TypewriterText'

const TypewriterDemo = () => {
  const words = ['Designer', 'Creator', 'Storyteller', 'Visionary']

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-light-coral py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-dark-navy mb-4">
            Typewriter Effect Variations
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore different typewriter animations with various cursor styles and behaviors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Delete & Retype Variant */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-primary-blue mb-4">
              Delete & Retype Variant
            </h2>
            <p className="text-text-secondary mb-6">
              Types each word, pauses, then deletes before typing the next word
            </p>
            <div className="text-3xl font-display text-dark-navy">
              I am a <TypewriterText
                words={words}
                variant="delete"
                cursorStyle="pipe"
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={1000}
              />
            </div>
          </motion.div>

          {/* Rotate Variant */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-primary-blue mb-4">
              Rotate Variant
            </h2>
            <p className="text-text-secondary mb-6">
              Smooth transition between words with fade and slide effects
            </p>
            <div className="text-3xl font-display text-dark-navy">
              I am a <TypewriterText
                words={words}
                variant="rotate"
                cursorStyle="underscore"
                wordChangeDelay={2000}
              />
            </div>
          </motion.div>

          {/* Pipe Cursor Variants */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-primary-blue mb-4">
              Pipe Cursor |
            </h2>
            <p className="text-text-secondary mb-6">
              Classic blinking pipe cursor
            </p>
            <div className="space-y-4">
              <div className="text-2xl font-display text-dark-navy">
                Delete: <TypewriterText
                  words={words}
                  variant="delete"
                  cursorStyle="pipe"
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={800}
                />
              </div>
              <div className="text-2xl font-display text-dark-navy">
                Rotate: <TypewriterText
                  words={words}
                  variant="rotate"
                  cursorStyle="pipe"
                  wordChangeDelay={1500}
                />
              </div>
            </div>
          </motion.div>

          {/* Underscore Cursor Variants */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-primary-blue mb-4">
              Underscore Cursor _
            </h2>
            <p className="text-text-secondary mb-6">
              Simple underscore cursor
            </p>
            <div className="space-y-4">
              <div className="text-2xl font-display text-dark-navy">
                Delete: <TypewriterText
                  words={words}
                  variant="delete"
                  cursorStyle="underscore"
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={800}
                />
              </div>
              <div className="text-2xl font-display text-dark-navy">
                Rotate: <TypewriterText
                  words={words}
                  variant="rotate"
                  cursorStyle="underscore"
                  wordChangeDelay={1500}
                />
              </div>
            </div>
          </motion.div>

          {/* Block Cursor Variants */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-primary-blue mb-4">
              Block Cursor ▊
            </h2>
            <p className="text-text-secondary mb-6">
              Solid block cursor that highlights the typing position
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-2xl font-display text-dark-navy">
                Delete: <TypewriterText
                  words={words}
                  variant="delete"
                  cursorStyle="block"
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={800}
                />
              </div>
              <div className="text-2xl font-display text-dark-navy">
                Rotate: <TypewriterText
                  words={words}
                  variant="rotate"
                  cursorStyle="block"
                  wordChangeDelay={1500}
                />
              </div>
            </div>
          </motion.div>

          {/* Custom Speed Demo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-primary-blue mb-4">
              Speed Variations
            </h2>
            <p className="text-text-secondary mb-6">
              Different typing and deletion speeds for various effects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-xl font-display text-dark-navy">
                Fast: <TypewriterText
                  words={['Quick', 'Speedy', 'Rapid']}
                  variant="delete"
                  cursorStyle="pipe"
                  typingSpeed={50}
                  deletingSpeed={25}
                  pauseDuration={500}
                />
              </div>
              <div className="text-xl font-display text-dark-navy">
                Medium: <TypewriterText
                  words={['Balanced', 'Smooth', 'Natural']}
                  variant="delete"
                  cursorStyle="underscore"
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseDuration={1000}
                />
              </div>
              <div className="text-xl font-display text-dark-navy">
                Slow: <TypewriterText
                  words={['Thoughtful', 'Deliberate', 'Careful']}
                  variant="delete"
                  cursorStyle="block"
                  typingSpeed={150}
                  deletingSpeed={75}
                  pauseDuration={1500}
                />
              </div>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/"
            className="inline-flex items-center btn-primary"
          >
            Back to Homepage
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default TypewriterDemo
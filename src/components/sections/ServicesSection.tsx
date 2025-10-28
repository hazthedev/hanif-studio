'use client'

import { motion } from 'framer-motion'
import {
  Palette,
  Smartphone,
  Package,
  Brush,
  Lightbulb,
  Target,
  Zap,
  Award
} from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand identity design including logo development, color systems, typography, and comprehensive brand guidelines.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Systems', 'Brand Strategy'],
      sectionId: 'brand-identity'
    },
    {
      id: 2,
      icon: Smartphone,
      title: 'UI/UX Design',
      description: 'User-centered design for digital products including websites, mobile apps, and complex web applications.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
      sectionId: 'ui-ux'
    },
    {
      id: 3,
      icon: Package,
      title: 'Packaging Design',
      description: 'Strategic packaging design that stands out on shelves and communicates your brand values effectively.',
      features: ['Package Design', 'Label Design', '3D Modeling', 'Print Production'],
      sectionId: 'packaging'
    },
    {
      id: 4,
      icon: Brush,
      title: 'Visual Product Design',
      description: 'Comprehensive visual design for products that combines aesthetics with functionality and user experience.',
      features: ['Product Design', 'Visual Systems', 'Design Systems', 'Component Libraries'],
      sectionId: 'visual-product'
    }
  ]

  const processSteps = [
    {
      id: 1,
      icon: Lightbulb,
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and competitive landscape.'
    },
    {
      id: 2,
      icon: Target,
      title: 'Strategy',
      description: 'Develop a comprehensive design strategy aligned with your business objectives.'
    },
    {
      id: 3,
      icon: Brush,
      title: 'Design',
      description: 'Create compelling visual solutions that communicate your brand effectively.'
    },
    {
      id: 4,
      icon: Zap,
      title: 'Implementation',
      description: 'Ensure smooth execution and delivery of design assets for production.'
    }
  ]

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '8+', label: 'Years Experience' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-navy mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive design services that help businesses create compelling brand experiences and connect with their audience.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-blue to-primary-coral bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.sectionId}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Service Icon */}
              <motion.div
                className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-blue/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <service.icon size={32} className="text-primary-coral" />
              </motion.div>

              {/* Service Content */}
              <h3 className="font-display text-2xl font-bold text-dark-navy mb-4 group-hover:text-primary-coral transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-3xl p-8 md:p-12 text-white mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Design Process
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              A collaborative approach that ensures your vision comes to life through thoughtful design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <motion.div
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <step.icon size={32} />
                </motion.div>

                <h4 className="font-bold text-xl mb-2">
                  {step.title}
                </h4>

                <p className="opacity-90 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Step Number */}
                <div className="mt-4 text-2xl font-bold opacity-50">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-dark-navy rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Award className="w-16 h-16 text-primary-coral mx-auto mb-6" />

          <h3 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Transform Your Brand?
          </h3>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to create a design that truly represents your brand and resonates with your audience.
          </p>

          <motion.a
            href="#contact"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
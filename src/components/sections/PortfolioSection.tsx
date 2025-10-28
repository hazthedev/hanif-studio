'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Tech Startup Brand',
      category: 'Brand Identity',
      description: 'Complete brand identity design for an innovative AI technology startup, including logo, visual system, and brand guidelines.',
      image: '/api/placeholder/600/400',
      tags: ['Branding', 'Logo Design', 'Visual System'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'UI/UX Design',
      description: 'User interface and experience design for a modern e-commerce platform with focus on conversion optimization.',
      image: '/api/placeholder/600/400',
      tags: ['UI Design', 'UX Research', 'Mobile App'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Sustainable Product Line',
      category: 'Packaging Design',
      description: 'Eco-friendly packaging design system for a sustainable consumer goods company.',
      image: '/api/placeholder/600/400',
      tags: ['Packaging', 'Sustainability', 'Brand System'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Financial Dashboard',
      category: 'Product Design',
      description: 'Dashboard design for a financial analytics platform with complex data visualization.',
      image: '/api/placeholder/600/400',
      tags: ['Dashboard', 'Data Viz', 'UI/UX'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Restaurant Chain',
      category: 'Brand Identity',
      description: 'Brand refresh and visual identity system for a growing restaurant chain.',
      image: '/api/placeholder/600/400',
      tags: ['Branding', 'Visual Identity', 'Menu Design'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Healthcare App',
      category: 'UI/UX Design',
      description: 'Mobile app design for a healthcare management platform with patient-first approach.',
      image: '/api/placeholder/600/400',
      tags: ['Mobile App', 'Healthcare', 'UX Design'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  const categories = ['All', 'Brand Identity', 'UI/UX Design', 'Packaging Design', 'Product Design']

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
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
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest design projects and see how we've helped businesses transform their brand identity and digital presence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                index === 0
                  ? 'bg-gradient-to-r from-primary-coral to-accent-orange text-white shadow-lg'
                  : 'bg-white text-dark-navy hover:bg-primary-coral/10 border border-gray-200 hover:border-primary-coral/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-secondary-blue opacity-10"></div>
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} className="text-dark-navy" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View project details"
                    >
                      <Github size={20} className="text-dark-navy" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary-coral uppercase tracking-wide">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-dark-navy mb-2 group-hover:text-primary-coral transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your next project?
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Play } from 'lucide-react'
import ImageModal from '@/components/ui/ImageModal'

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<{
    images: string[]
    title: string
    description: string
    projectUrl?: string
  } | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Social Media Poster',
      category: 'UI/UX Design',
      description: 'Eye-catching social media poster designs featuring vibrant colors, modern typography, and engaging visual elements. Created to boost brand visibility and audience engagement across various social platforms with consistent visual language.',
      images: [
        '/pf-1/pf-1-1.jpg',
        '/pf-1/pf-1-2.jpg',
        '/pf-1/pf-1-3.jpg',
        '/pf-1/pf-1-4.jpg',
        '/pf-1/pf-1-5.jpg',
        '/pf-1/pf-1-6.jpg',
        '/pf-1/pf-1-7.png',
        '/pf-1/pf-1-8.png',
        '/pf-1/pf-1-9.png',
        '/pf-1/pf-1-10.png',
        '/pf-1/pf-1-11.png'
      ],
      tags: ['Social Media', 'Poster Design', 'Visual Branding', 'Digital Marketing'],
      liveUrl: '',
      githubUrl: ''
    },
    {
      id: 2,
      title: 'Branding',
      category: 'Brand Identity',
      description: 'Comprehensive brand identity design featuring custom logos, color palettes, typography systems, and brand guidelines. Created to establish a strong visual presence that resonates with target audiences and builds brand recognition.',
      images: [
        '/pf-2/pf-2-1.png',
        '/pf-2/pf-2-2.png',
        '/pf-2/pf-2-3.png'
      ],
      tags: ['Logo Design', 'Brand Identity', 'Visual Guidelines', 'Typography'],
      liveUrl: '',
      githubUrl: ''
    },
    {
      id: 3,
      title: 'Apparel',
      category: 'Fashion Design',
      description: 'Modern apparel and fashion designs combining aesthetic appeal with functionality. Features creative patterns, contemporary styling, and attention to detail for various clothing categories and target demographics.',
      images: [
        '/pf-3/pf-3-1.png'
      ],
      tags: ['Fashion Design', 'Apparel', 'Creative Patterns', 'Styling'],
      liveUrl: '',
      githubUrl: ''
    },
    {
      id: 4,
      title: 'Visual Assets',
      category: 'Graphic Design',
      description: 'Comprehensive collection of visual assets including icons, illustrations, graphics, and design elements. Created to maintain consistency across various marketing materials and digital platforms with professional visual communication.',
      images: [
        '/pf-4/pf-4-1.png',
        '/pf-4/pf-4-2.png'
      ],
      tags: ['Icons', 'Illustrations', 'Graphics', 'Visual Elements'],
      liveUrl: '',
      githubUrl: ''
    },
    {
      id: 5,
      title: 'Website Design',
      category: 'Web Design',
      description: 'Modern, responsive website design focusing on user experience, conversion optimization, and aesthetic appeal. Features clean layouts, intuitive navigation, and cutting-edge design trends adapted for the client\'s brand and target audience.',
      images: [
        '/pf-5/pf-5-1.png'
      ],
      tags: ['Web Design', 'UI/UX', 'Responsive Design', 'User Experience'],
      liveUrl: 'https://lovaloq.com/',
      githubUrl: ''
    }
  ]

  const categories = ['All', 'Brand Identity', 'UI/UX Design', 'Packaging Design', 'Product Design']

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject({
      images: project.images,
      title: project.title,
      description: project.description,
      projectUrl: project.liveUrl
    })
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

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
              <div
                className="relative overflow-hidden h-48 bg-gray-100 cursor-pointer group"
                onClick={() => openProjectModal(project)}
              >
                {/* Project thumbnail image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-coral to-primary-blue opacity-20"></div>

                {project.images[0]?.includes('/api/placeholder/') ? (
                  // Placeholder for API placeholder images
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-3 flex items-center justify-center backdrop-blur-sm">
                        <Eye size={32} className="text-white" />
                      </div>
                      <p className="text-white text-sm font-medium">
                        {project.images.length} Images
                      </p>
                      <p className="text-white/70 text-xs">
                        Click to view gallery
                      </p>
                    </div>
                  </div>
                ) : (
                  // Real thumbnail image
                  <>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `
                            <div class="absolute inset-0 flex items-center justify-center">
                              <div class="text-center">
                                <div class="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-3 flex items-center justify-center backdrop-blur-sm">
                                  <svg class="text-white" width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                </div>
                                <p class="text-white text-sm font-medium">Image not available</p>
                              </div>
                            </div>
                          `
                        }
                      }}
                    />
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.images.length} Images
                    </div>
                  </>
                )}

                {/* Hover overlay with actions */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  {/* Top badges */}
                  <div className="flex justify-between items-start">
                    <span className="bg-primary-coral text-white text-xs px-2 py-1 rounded-full">
                      {project.images.length} Photos
                    </span>
                    <div className="flex space-x-2">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Bottom actions */}
                  <div className="flex justify-between items-end">
                    <div className="text-white">
                      <p className="text-xs opacity-80">View Project</p>
                    </div>
                    <div className="flex space-x-2">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <motion.a
                          href={project.liveUrl}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                          aria-label="View live project"
                        >
                          <ExternalLink size={16} className="text-white" />
                        </motion.a>
                      )}
                      <motion.button
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="View project gallery"
                      >
                        <Play size={16} className="text-white" />
                      </motion.button>
                    </div>
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

                <p className="text-gray-600 line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* View Gallery Button */}
                <motion.button
                  onClick={() => openProjectModal(project)}
                  className="w-full bg-gradient-to-r from-primary-coral to-accent-orange text-white py-2 px-4 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Eye size={16} />
                  <span>View Gallery ({project.images.length} images)</span>
                </motion.button>
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

      {/* Image Modal */}
      {selectedProject && (
        <ImageModal
          isOpen={!!selectedProject}
          onClose={closeModal}
          images={selectedProject.images}
          title={selectedProject.title}
          description={selectedProject.description}
          projectUrl={selectedProject.projectUrl}
        />
      )}
    </section>
  )
}

export default PortfolioSection
'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Target,
  Award,
  Heart,
  Eye,
  Zap,
  CheckCircle,
  Star
} from 'lucide-react'

const AboutSection = () => {
  const values = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading creative partner for innovative brands, transforming ideas into impactful visual experiences.'
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'To deliver exceptional design solutions that drive business growth and create meaningful connections with audiences.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Creativity, collaboration, integrity, and excellence in everything we do.'
    }
  ]

  const team = [
    {
      id: 1,
      name: 'Hanif Studio',
      role: 'Creative Director & Lead Designer',
      bio: 'Passionate designer with over 8 years of experience in brand identity, UI/UX design, and creative direction.',
      image: '/api/placeholder/300/300',
      skills: ['Brand Strategy', 'UI/UX Design', 'Creative Direction', 'Design Systems']
    }
  ]

  const achievements = [
    { icon: Award, label: 'Award-Winning Designs', count: '15+' },
    { icon: Users, label: 'Happy Clients', count: '100+' },
    { icon: Target, label: 'Projects Completed', count: '150+' },
    { icon: Star, label: 'Client Satisfaction', count: '95%' }
  ]

  const expertise = [
    'Brand Identity Design',
    'UI/UX Design',
    'Visual Product Design',
    'Packaging Design',
    'Design Systems',
    'Creative Strategy',
    'Digital Marketing Design',
    'Print Design'
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
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
            About Hanif Studio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a creative design studio passionate about building meaningful brands and exceptional digital experiences.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="font-display text-3xl font-bold text-dark-navy mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a passion for creativity and innovation, Hanif Studio has been transforming brands and creating exceptional design experiences for over 8 years. Our journey began with a simple mission: to help businesses communicate their unique value through compelling visual design.
              </p>
              <p>
                Today, we're proud to be a trusted creative partner for businesses of all sizes, from innovative startups to established enterprises. Our approach combines strategic thinking with creative excellence to deliver designs that not only look beautiful but drive real business results.
              </p>
              <p>
                We believe that great design is born from collaboration, understanding, and a relentless pursuit of excellence. Every project is an opportunity to push boundaries and create something truly remarkable.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-blue to-secondary-blue rounded-2xl h-96 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap size={40} />
                </div>
                <h4 className="font-display text-2xl font-bold mb-2">
                  8+ Years of Creative Excellence
                </h4>
                <p className="opacity-90">
                  Transforming brands through thoughtful design
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <value.icon size={32} className="text-primary-coral" />
              </motion.div>

              <h3 className="font-display text-xl font-bold text-dark-navy mb-4">
                {value.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display text-3xl font-bold text-dark-navy text-center mb-12">
            Meet Our Founder
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-blue to-secondary-blue rounded-2xl h-80"></div>
            </div>

            <div>
              <h4 className="font-display text-2xl font-bold text-dark-navy mb-2">
                {team[0].name}
              </h4>
              <p className="text-primary-coral font-medium mb-4">
                {team[0].role}
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {team[0].bio}
              </p>

              <div className="mb-6">
                <h5 className="font-bold text-dark-navy mb-3">Expertise</h5>
                <div className="flex flex-wrap gap-2">
                  {team[0].skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bg-dark-navy rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-display text-3xl font-bold text-white text-center mb-12">
            Our Achievements
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <achievement.icon size={24} className="text-primary-coral" />
                </motion.div>

                <div className="text-2xl md:text-3xl font-bold text-primary-coral mb-2">
                  {achievement.count}
                </div>
                <div className="text-gray-300 text-sm">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="font-display text-2xl font-bold text-dark-navy mb-8">
            Our Expertise
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {expertise.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center justify-center space-x-2 text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
              >
                <CheckCircle size={16} className="text-primary-coral" />
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
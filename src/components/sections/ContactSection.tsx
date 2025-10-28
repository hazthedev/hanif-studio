'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Briefcase,
  Users
} from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    'Brand Identity',
    'UI/UX Design',
    'Visual Product Design',
    'Packaging Design',
    'Design Consultation',
    'Other'
  ]

  const budgets = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Discuss on call'
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@hanifstudio.com',
      link: 'mailto:hello@hanifstudio.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Design District, NY 10001',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 9AM - 6PM EST',
      link: '#'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
      budget: ''
    })
  }

  const faqs = [
    {
      question: 'How long does a typical design project take?',
      answer: 'Project timelines vary depending on scope and complexity. A typical brand identity project takes 4-6 weeks, while UI/UX projects can range from 6-12 weeks.'
    },
    {
      question: 'What is your design process like?',
      answer: 'We follow a collaborative 4-step process: Discovery, Strategy, Design, and Implementation. Each phase includes client review and feedback sessions.'
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes and can tailor our services to fit different budgets and requirements.'
    },
    {
      question: 'Can you work within our existing brand guidelines?',
      answer: 'Yes, we can either work within existing brand guidelines or help you develop new ones. We\'re flexible to meet your specific needs.'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
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
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next design project? Get in touch and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-dark-navy mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="flex items-center space-x-3 text-gray-600 hover:text-primary-coral transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 bg-primary-coral/10 rounded-lg flex items-center justify-center group-hover:bg-primary-coral/20 transition-colors">
                      <info.icon size={20} className="text-primary-coral" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-dark-navy">
                        {info.title}
                      </div>
                      <div className="text-sm">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-dark-navy mb-4">Why Choose Hanif Studio?</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MessageSquare size={20} className="text-primary-coral mt-1" />
                  <div>
                    <div className="font-medium text-dark-navy">Clear Communication</div>
                    <div className="text-sm text-gray-600">Regular updates and transparent process</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase size={20} className="text-primary-coral mt-1" />
                  <div>
                    <div className="font-medium text-dark-navy">8+ Years Experience</div>
                    <div className="text-sm text-gray-600">Proven track record of success</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users size={20} className="text-primary-coral mt-1" />
                  <div>
                    <div className="font-medium text-dark-navy">Client-Focused</div>
                    <div className="text-sm text-gray-600">Your success is our priority</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-navy mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-navy mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-dark-navy mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-navy mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-dark-navy mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-dark-navy mb-2">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-navy mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display text-3xl font-bold text-dark-navy text-center mb-12">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="font-bold text-dark-navy mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
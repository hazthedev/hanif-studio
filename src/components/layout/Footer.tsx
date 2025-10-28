import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react'

const smoothScroll = (targetId: string) => {
  const element = document.getElementById(targetId.replace('#', ''))
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const services = [
    { label: 'Brand Identity', href: '#services#brand-identity' },
    { label: 'Visual Product Design', href: '#services#visual-product' },
    { label: 'UI/UX Design', href: '#services#ui-ux' },
    { label: 'Packaging Design', href: '#services#packaging' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">HS</span>
              </div>
              <span className="font-display text-xl font-bold">
                Hanif Studio
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              We create compelling brand identities and visual product designs that
              help businesses stand out and connect with their audience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-blue/10 rounded-full flex items-center justify-center
                           hover:bg-primary-blue transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => smoothScroll(link.href)}
                    className="text-gray-300 hover:text-primary-blue transition-colors text-left w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <button
                    onClick={() => smoothScroll(service.href)}
                    className="text-gray-300 hover:text-primary-blue transition-colors text-left w-full"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-blue" />
                <span className="text-gray-300">hello@hanifstudio.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-blue" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary-blue" />
                <span className="text-gray-300">Design District, NY</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Hanif Studio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-gray-400 text-sm">
                Privacy Policy
              </span>
              <span className="text-gray-400 text-sm">
                Terms of Service
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-coral to-accent-orange text-white rounded-full
                 shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
        aria-label="Scroll to top"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} className="text-white" />
      </motion.button>
    </footer>
  )
}

export default Footer
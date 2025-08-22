'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-transparent text-white py-12 text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-500 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-500 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin size={28} />
            </motion.a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
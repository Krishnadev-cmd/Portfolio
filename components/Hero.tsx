'use client'
import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Add subtle background animation or particles here if desired */}
      </div>
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Hi, I'm <span className="text-violet-500">{personalInfo.name}</span>.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          {personalInfo.bio}
        </motion.p>
        <motion.div variants={itemVariants} className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="bg-violet-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-violet-700 transition-colors shadow-lg"
          >
            Get in Touch
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-600 transition-colors shadow-lg"
          >
            View GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'
import TypewriterEffect from './TypewriterEffect'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const roles = [
    'Next.js Developer',
    'Full-Stack Developer',
    'AI/ML Enthusiast',
  ]

  return (
    <section id="hero" className="h-screen max-w-5xl mx-auto px-6 flex flex-col justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-violet-500 mb-4 text-lg md:text-xl">
          Hi, my name is
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-4">
          {personalInfo.name}
        </motion.h2>
        <motion.h3 variants={itemVariants} className="text-xl md:text-3xl text-gray-400 mb-6">
          <TypewriterEffect words={roles} />
        </motion.h3>
        <motion.p variants={itemVariants} className="max-w-xl text-lg text-gray-300 mb-8">
          {personalInfo.shortBio}
        </motion.p>
      </motion.div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '@/lib/data'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.h2
          ref={ref}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-4xl md:text-5xl font-bold mb-8 text-white"
        >
          About Me
        </motion.h2>
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>
      </div>
    </section>
  )
}
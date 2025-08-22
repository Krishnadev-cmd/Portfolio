'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '@/lib/data'

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h2
          ref={ref}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-4xl md:text-5xl font-bold mb-12 text-white"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={itemVariants}
              className="bg-gray-800 text-gray-300 px-5 py-2 rounded-full text-lg font-medium hover:bg-violet-600 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
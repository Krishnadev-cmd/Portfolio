'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '@/lib/data'
import Image from 'next/image'

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
    <section id="about" className="py-24 md:py-32 max-w-5xl mx-auto px-6">
      <motion.div
        ref={ref}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="about-heading w-fit flex flex-row mt-4 mb-10"
      >
        <div className="text-violet-500 flex items-center text-base md:text-xl">
          01.{' '}
        </div>
        <h1 className="text-white min-w-fit ml-2 text-2xl md:text-3xl flex justify-center items-center font-bold">
          About Me
        </h1>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="flex flex-col md:flex-row items-center md:items-start min-h-full text-lg font-medium text-gray-300 gap-12"
      >
        {/* Bio & skills text */}
        <div className="md:w-2/3">
          <p className="mb-4">{personalInfo.bio}</p>
          <p className="mb-4">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <div className="recent-skills grid grid-cols-2 gap-2">
            {personalInfo.recentSkills.map((skill, index) => (
              <div
                key={index}
                className="recent-skills-skill relative mb-2 pl-5 text-sm before:content-['▹'] before:absolute before:left-0 before:text-violet-500"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Clean profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex-shrink-0 flex flex-col items-center gap-4"
        >
          {/* Image with layered ring effect */}
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-600/60 to-blue-500/30 blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Inner border */}
            <div className="relative w-56 h-64 lg:w-64 lg:h-72 rounded-2xl overflow-hidden border border-violet-500/30">
              <Image
                src={personalInfo.profilePicture}
                alt={personalInfo.name}
                fill
                priority
                className="object-cover object-top"
              />
              {/* Subtle bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a0a1a]/40 to-transparent" />
            </div>
          </div>

          {/* Name + title badge below photo */}
          <div className="text-center">
            <p className="text-white font-semibold text-base">{personalInfo.name}</p>
            <p className="text-violet-400 text-sm mt-0.5">Generative AI Engineer</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

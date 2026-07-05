'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '@/lib/data'
import Image from 'next/image'

const ThreeDDeveloper = dynamic(() => import('./ThreeDDeveloper'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-950/20">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-violet-500"></div>
    </div>
  ),
})

export default function About() {
  const [show3d, setShow3d] = useState(true)
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
        className="flex flex-col md:flex-row items-center min-h-full text-lg font-medium text-gray-300"
      >
        <div className="md:w-2/3">
          <p className="mb-4">{personalInfo.bio}</p>
          <p className="mb-4">
            Here are a few technologies I’ve been working with recently:
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
        <div className="mx-auto mt-16 md:mt-0 md:ml-14">
          <div className="w-72 h-72 md:w-64 md:h-64 lg:w-80 lg:h-80 relative rounded-2xl border border-white/10 bg-gradient-to-br from-violet-950/10 to-cyan-950/10 shadow-[0_0_50px_-12px_rgba(139,92,246,0.35)] hover:border-violet-500/20 transition-all duration-500 overflow-hidden">
            {/* Interactive Toggle */}
            <div className="absolute top-3 right-3 z-20 flex bg-gray-950/80 backdrop-blur-md border border-white/5 rounded-full p-0.5 shadow-lg select-none">
              <button
                onClick={() => setShow3d(true)}
                className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 cursor-pointer ${
                  show3d
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                3D Model
              </button>
              <button
                onClick={() => setShow3d(false)}
                className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 cursor-pointer ${
                  !show3d
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Photo
              </button>
            </div>

            {show3d ? (
              <div className="w-full h-full relative">
                <ThreeDDeveloper />
              </div>
            ) : (
              <div className="w-full h-full relative">
                <Image
                  src={personalInfo.profilePicture}
                  alt="profile pic"
                  fill
                  className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

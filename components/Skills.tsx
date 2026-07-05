'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { skills } from '@/lib/data'

interface SkillBarProps {
  name: string
  level: number
}

const SkillBar = ({ name, level }: SkillBarProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between text-white">
        <div className="skillName">{name}</div>
        <div className="text-violet-500/75">{level}%</div>
      </div>
      <div className="card-container mt-2">
        <div className="bar w-full h-4 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="bar-fill h-full bg-violet-500"
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : { width: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [cardMinimized, setCardMinimized] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

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
    <section id="skills" className="py-24 md:py-32 max-w-5xl mx-auto px-6 select-none">

      {/* Section Heading */}
      <motion.div
        ref={ref}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="about-heading w-fit flex flex-row mt-4 mb-10"
      >
        <div className="text-violet-500 flex items-center text-base md:text-xl">
          02.{' '}
        </div>
        <h1 className="text-white min-w-fit ml-2 text-2xl md:text-3xl flex justify-center items-center font-bold">
          My Skills
        </h1>
      </motion.div>

      {/* Main Container */}
      <div className="relative min-h-[520px]">

        {/* FIFA Card (Layout-animated to shrink and fly to the top-right header on click) */}
        <motion.div
          onClick={() => {
            if (!cardMinimized) {
              setCardMinimized(true)
            } else {
              setCardMinimized(false)
              setAnimationComplete(false)
            }
          }}
          style={{
            transformStyle: 'preserve-3d',
            position: 'absolute',
          }}
          className="cursor-pointer z-30 select-none"
          animate={
            cardMinimized
              ? {
                  left: '100%',
                  top: '-35px',
                  x: '-100%',
                  y: 0,
                  scale: 0.38,
                  rotateY: 360,
                  rotateX: 10,
                }
              : {
                  left: '50%',
                  top: '260px',
                  x: '-50%',
                  y: '-50%',
                  scale: 1,
                  rotateY: 0,
                  rotateX: 0,
                }
          }
          transition={{
            duration: 0.85,
            ease: [0.25, 1, 0.5, 1], // premium cubic-bezier easeOut
          }}
          onAnimationComplete={() => {
            if (cardMinimized) {
              setAnimationComplete(true)
            }
          }}
        >
          {/* Card Frame containing raw FUT card image */}
          <div className="w-[280px] h-[350px] relative shadow-2xl">
            <Image
              src="/images/photo_2026-07-05_16-49-59.jpg"
              alt="FIFA Gold Card"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Helper guide below the enlarged card */}
        <AnimatePresence>
          {!cardMinimized && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="absolute top-[455px] left-[50%] z-30 pointer-events-none select-none text-center"
              style={{ x: '-50%' }}
            >
              <div className="text-xs font-light text-gray-400 tracking-wider">
                Click Card to View Skills
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Existing Skills Bars revealed once the card finishes its glide transition */}
        <AnimatePresence>
          {animationComplete && (
            <motion.div
              key="skills-list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex flex-col md:flex-row justify-between items-center md:items-start align-middle min-h-full text-lg font-medium pt-36"
            >
              <div className="w-full md:w-1/2 md:pr-8">
                <h1 className="text-white font-bold mb-10 text-xl flex items-center gap-2">
                  <span className="text-violet-500">▹</span> Core Technical Skills
                </h1>
                {skills.core.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>

              <div className="w-full md:w-1/2 md:pl-8 mt-10 md:mt-0">
                <h1 className="text-white font-bold mb-10 text-xl flex items-center gap-2">
                  <span className="text-violet-500">▹</span> Other Skills
                </h1>
                {skills.other.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

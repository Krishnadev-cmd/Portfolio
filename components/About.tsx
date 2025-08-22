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
            <div className="wrap-image w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                src={personalInfo.profilePicture}
                alt="profile pic"
                fill
                className="rounded-lg object-cover object-top"
                />
            </div>
            </div>
      </motion.div>
    </section>
  )
}

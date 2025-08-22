'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
    <section id="skills" className="py-24 md:py-32 max-w-5xl mx-auto px-6">
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

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="flex flex-col md:flex-row justify-between items-center md:items-start align-middle min-h-full text-lg font-medium"
      >
        <div className="w-full md:w-1/2 md:pr-8">
          <h1 className="text-white font-bold mb-10 text-xl">Core Technical Skills</h1>
          {skills.core.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-10 md:mt-0">
          <h1 className="text-white font-bold mb-10 text-xl">Other skills</h1>
          {skills.other.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

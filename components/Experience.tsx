'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { experience } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0)

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
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          ref={ref}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Where I Have Worked
        </motion.h2>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Company List (Tabs) */}
          <div className="lg:w-1/4 flex lg:flex-col overflow-x-auto lg:overflow-y-auto no-scrollbar bg-gray-800 rounded-lg shadow-lg">
            {experience.map((job, index) => (
              <button
                key={job.company}
                className={`py-3 px-6 text-left text-lg font-medium transition-colors duration-300 whitespace-nowrap
                  ${index === selectedCompanyIndex
                    ? 'text-violet-500 border-l-4 border-violet-500 bg-gray-700'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700 border-l-4 border-transparent'
                  }`}
                onClick={() => setSelectedCompanyIndex(index)}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="lg:w-3/4 bg-gray-800 p-8 rounded-lg shadow-lg">
            {experience[selectedCompanyIndex] && (
              <motion.div
                key={selectedCompanyIndex} // Key for re-animating content on tab change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {experience[selectedCompanyIndex].title}{' '}
                  <a
                    href={experience[selectedCompanyIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-500 hover:underline"
                  >
                    @{experience[selectedCompanyIndex].company}
                  </a>
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {experience[selectedCompanyIndex].date}
                </p>
                <ul className="list-none space-y-3 text-gray-300">
                  {experience[selectedCompanyIndex].description.map((desc, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight size={18} className="text-violet-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

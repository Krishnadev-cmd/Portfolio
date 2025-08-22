'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '@/lib/data'
import Image from 'next/image'

// Custom GitHub and ExternalLink SVG icons to match the provided HTML
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hover:text-violet-500">
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" className="text-gray-400 hover:text-violet-500" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

export default function Projects() {
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
    <section id="projects" className="py-24 md:py-32 max-w-5xl mx-auto px-6">
      <motion.h2
        ref={ref}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
      >
        Some Things I've Built
      </motion.h2>

      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={`project-box flex flex-col justify-center items-center min-h-full text-lg font-medium mb-20 ${
            index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
          }`}
        >
          <div className={`relative w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block">
              <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill 
                  objectFit="cover"
                  className="opacity-20 lg:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
          </div>

          <div className={`w-full lg:w-1/2 p-6 lg:p-0 flex flex-col ${
            index % 2 === 0 ? 'items-start lg:items-end text-left lg:text-right' : 'items-start text-left'
          } z-10`}>
            <div className="text-violet-500 my-2 text-sm">Featured Project</div>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="font-bold text-3xl text-white mb-4 hover:text-violet-500 cursor-pointer">
              {project.title}
            </a>
            <div className="relative w-full project-card bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
              <p className="text-gray-300 text-lg">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-gray-400 text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center">
                <GitHubIcon />
              </a>
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center">
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
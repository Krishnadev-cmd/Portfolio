'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { otherProjects } from '@/lib/data'

// Custom GitHub and ExternalLink SVG icons
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hover:text-violet-500 w-5 h-5">
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" className="text-gray-400 hover:text-violet-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500 w-10 h-10">
    <title>Folder</title>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
)

export default function OtherProjects() {
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
    <section id="other-projects" className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
        >
          Other Noteworthy Projects
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-400 mb-16 text-lg"
        >
          A selection of additional projects I've worked on
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 flex flex-col hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {/* Top section with folder icon and links */}
              <div className="flex justify-between items-start mb-6">
                <FolderIcon />
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:scale-110 transition-transform"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:scale-110 transition-transform"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Project title */}
              <h3 className="text-xl font-bold text-white mb-3 hover:text-violet-500 transition-colors">
                {project.title}
              </h3>

              {/* Project description */}
              <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-gray-400 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '@/lib/data'
import Image from 'next/image'

// Custom GitHub and ExternalLink SVG icons
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
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

  // Predefined custom gaming stats for each project to enhance theme detail
  const projectStats = [
    { hp: '92', armor: '88', cost: '2⚡' },
    { hp: '95', armor: '90', cost: '3⚡' },
    { hp: '89', armor: '92', cost: '2⚡' },
    { hp: '94', armor: '87', cost: '3⚡' },
  ]

  return (
    <section id="projects" className="py-24 md:py-32 max-w-6xl mx-auto px-6 overflow-hidden">
      <motion.h2
        ref={ref}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-4 gap-x-8 justify-items-center">
        {projects.map((project, index) => {
          const stats = projectStats[index] || { hp: '99', armor: '99', cost: '2⚡' }
          return (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="scene select-none"
            >
              <div className="card divine">
                <div className="lava-trim"></div>
                <div className="particles-outside"></div>

                <div className="rarity">PROJECT // 0{project.id}</div>

                <div className="header flex justify-center items-center">
                  <span className="title truncate px-2">{project.title.toUpperCase()}</span>
                </div>

                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="art relative overflow-hidden group cursor-pointer block"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <span className="subs absolute bottom-2 right-2 z-20">VISIT ART</span>
                  <div className="lava-trim"></div>
                </a>

                <section className="stats">
                  <div>
                    <span className="label">HP</span>
                    <span className="value">{stats.hp}</span>
                  </div>
                  <div>
                    <span className="label">DEF</span>
                    <span className="value">{stats.armor}</span>
                  </div>
                  <div>
                    <span className="label">COST</span>
                    <span className="value energy">{stats.cost}</span>
                  </div>
                </section>

                <section className="abilities">
                  <div className="ability passive">
                    <span className="ability-title">PASSIVE — TECH STACK</span>
                    <span className="ability-text truncate block text-left" title={project.technologies.join(', ')}>
                      {project.technologies.slice(0, 4).join(' • ')}
                      {project.technologies.length > 4 ? ' ...' : ''}
                    </span>
                  </div>
                  <div className="ability active">
                    <span className="ability-title">ACTIVE — OVERVIEW</span>
                    <span className="ability-text line-clamp-2 text-left" title={project.description}>
                      {project.description}
                    </span>
                  </div>
                </section>

                <div className="footnote relative z-30 flex flex-col justify-center items-center pointer-events-auto">
                  <div className="footnote-bg pointer-events-none"></div>
                  <div className="flex justify-center items-center gap-6 mt-1 text-sm font-semibold relative z-40">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline flex items-center gap-1.5 text-[#ffd700] hover:text-white transition-colors"
                      >
                        <GitHubIcon /> GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline flex items-center gap-1.5 text-[#ffd700] hover:text-white transition-colors"
                      >
                        <ExternalLinkIcon /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
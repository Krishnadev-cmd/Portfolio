'use client'
import { motion, type Variants } from 'framer-motion'
import { personalInfo } from '@/lib/data'
import TypewriterEffect from './TypewriterEffect'
import Image from 'next/image'


export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  }

  const roles = [
    'Next.js Developer',
    'Full-Stack Developer',
    'AI/ML Enthusiast',
    'Generative AI Engineer',
  ]

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Banner background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Gemini_Generated_Image_ruzjzwruzjzwruzj.png"
          alt="Hero banner"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Multi-layer dark gradient overlay for depth + text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/95 via-[#0a0a1a]/80 to-[#0a0a1a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/90 via-transparent to-[#0a0a1a]/30" />
      </div>

      {/* Ambient glow orbs that complement the banner's city-light aesthetic */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Text side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className=""
        >
          <motion.p
            variants={itemVariants}
            className="text-violet-400 mb-4 text-lg md:text-xl font-mono tracking-widest uppercase"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight"
            style={{ textShadow: '0 0 40px rgba(139,92,246,0.3)' }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold"
          >
            <TypewriterEffect words={roles} />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base md:text-lg text-gray-400 mb-10 leading-relaxed"
          >
            {personalInfo.shortBio}
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-semibold text-sm bg-violet-600 hover:bg-violet-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:-translate-y-0.5 no-underline hover:no-underline"
              style={{ color: '#ffffff', textDecoration: 'none' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-semibold text-sm border border-violet-500/50 hover:border-violet-400 transition-all duration-300 hover:bg-violet-500/10 hover:-translate-y-0.5 no-underline hover:no-underline"
              style={{ color: '#c4b5fd', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ddd6fe')}
              onMouseLeave={e => (e.currentTarget.style.color = '#c4b5fd')}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

  
      </div>

      {/* Bottom fade to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-[#0a0a1a] to-transparent pointer-events-none" />

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-500"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-violet-500 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

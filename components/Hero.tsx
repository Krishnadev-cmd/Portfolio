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

      {/* Banner background — full quality, proper sizes for every viewport */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Gemini_Generated_Image_ruzjzwruzjzwruzj.png"
          alt="Hero banner"
          fill
          priority
          quality={100}
          sizes="100vw"
          unoptimized
          className="object-cover object-[55%_center] md:object-center"
        />

        {/* Mobile overlay: heavy dark veil so text is always readable */}
        <div className="absolute inset-0 bg-[#0a0a1a]/80 md:hidden" />

        {/* Desktop overlay: directional gradients for depth */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0a0a1a]/95 via-[#0a0a1a]/75 to-[#0a0a1a]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/90 via-transparent to-[#0a0a1a]/30" />
      </div>

      {/* Ambient glow orb */}
      <div
        className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* "Hi, my name is" */}
          <motion.p
            variants={itemVariants}
            className="text-violet-400 mb-3 md:mb-4 text-sm sm:text-base md:text-xl font-mono tracking-widest uppercase"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-3 md:mb-4 leading-tight"
            style={{ textShadow: '0 0 40px rgba(139,92,246,0.3)' }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typewriter roles */}
          <motion.div
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 md:mb-6 font-semibold"
          >
            <TypewriterEffect words={roles} />
          </motion.div>

          {/* Short bio */}
          <motion.p
            variants={itemVariants}
            className="max-w-xs sm:max-w-sm md:max-w-xl text-sm sm:text-base md:text-lg text-gray-400 mb-8 md:mb-10 leading-relaxed"
          >
            {personalInfo.shortBio}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex gap-3 sm:gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm bg-violet-600 hover:bg-violet-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:-translate-y-0.5"
              style={{ color: '#ffffff', textDecoration: 'none' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm border border-violet-500/50 hover:border-violet-400 transition-all duration-300 hover:bg-violet-500/10 hover:-translate-y-0.5"
              style={{ color: '#c4b5fd', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ddd6fe')}
              onMouseLeave={e => (e.currentTarget.style.color = '#c4b5fd')}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 z-10 bg-gradient-to-t from-[#0a0a1a] to-transparent pointer-events-none" />

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-500"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          className="w-px h-6 md:h-8 bg-gradient-to-b from-violet-500 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

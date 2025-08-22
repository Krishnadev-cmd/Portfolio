'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import { personalInfo, navLinks } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
  }

  // Custom SVG Logo (P inside hexagon)
  const Logo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" className="min-w-[43px] h-[43px]"><text fill="#8B5CF6" fontFamily="Calibre-Medium, Calibre" fontSize="50" fontWeight="400" letterSpacing="4.167" transform="translate(36 33)"><tspan x="0.142" y="33">K</tspan></text><path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M50 5L11 27v45l39 23 39-22V28z"></path></svg>
  )
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center h-full">
        <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Logo />
          </motion.div>
        </ScrollLink>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-8 text-gray-300 text-sm">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                transition={{ delay: index * 0.1 }}
              >
                {link.href.startsWith('#') ? (
                  <ScrollLink
                    to={link.href.substring(1)}
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust offset based on fixed header height
                    className="hover:text-violet-500 transition-colors cursor-pointer"
                  >
                    <span className="text-violet-500 mr-1">0{index + 1}.</span> {link.name}
                  </ScrollLink>
                ) : (
                  <a
                    href={link.href}
                    className="hover:text-violet-500 transition-colors cursor-pointer"
                  >
                    <span className="text-violet-500 mr-1">0{index + 1}.</span> {link.name}
                  </a>
                )}
              </motion.li>
            ))}
          </ul>
          <motion.a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-violet-500 text-violet-500 px-4 py-2 rounded-lg hover:bg-violet-500 hover:text-white transition-colors text-sm"
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            transition={{ delay: navLinks.length * 0.1 }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <motion.div
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={mobileMenuVariants}
        className="fixed top-0 right-0 h-full w-3/4 bg-gray-900 shadow-lg p-6 sm:hidden transform transition-transform duration-300 ease-in-out"
      >
        <div className="flex justify-end mb-8">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 text-gray-300 text-lg">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              transition={{ delay: index * 0.1 }}
            >
              {link.href.startsWith('#') ? (
                <ScrollLink
                  to={link.href.substring(1)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:text-violet-500 transition-colors cursor-pointer"
                  onClick={toggleMenu} // Close menu on click
                >
                  <span className="text-violet-500 mr-1">0{index + 1}.</span> {link.name}
                </ScrollLink>
              ) : (
                <a
                  href={link.href}
                  className="hover:text-violet-500 transition-colors cursor-pointer"
                  onClick={toggleMenu} // Close menu on click
                >
                  <span className="text-violet-500 mr-1">0{index + 1}.</span> {link.name}
                </a>
              )}
            </motion.li>
          ))}
          <motion.a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-violet-500 text-violet-500 px-6 py-3 rounded-lg hover:bg-violet-500 hover:text-white transition-colors text-lg mt-8"
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            transition={{ delay: navLinks.length * 0.1 }}
            onClick={toggleMenu} // Close menu on click
          >
            Resume
          </motion.a>
        </ul>
      </motion.div>
    </header>
  )
}

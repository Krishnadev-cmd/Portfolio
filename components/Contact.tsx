'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
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
    <section 
      id="contact" 
      className="mb-12 py-[80px] sm:py-[100px] max-w-[600px] text-white/25 flex flex-col justify-center items-center mx-auto overflow-x-hidden"
      ref={ref}
    >
      <motion.div 
        className="w-fit flex flex-row mt-[10px] mb-4"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="text-teal-400 flex items-center text-[16px] font-mono">
          04. What's Next?
        </div>
      </motion.div>

      <motion.h1 
        className="font-bold text-[40px] sm:text-[45px] md:text-[50px] lg:text-[60px] text-white mb-8"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: 0.1 }}
      >
        Get In Touch
      </motion.h1>

      <motion.div 
        className="flex flex-col md:flex-row align-middle min-h-full text-[20px] font-medium"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: 0.2 }}
      >
        <div>
          <p className="mb-4 text-center text-[18px] text-gray-400 leading-relaxed">
            I am actively looking for Internship opportunities in Software/Web Development. 
            If you are looking to hire or just want to say Hi, my inbox is always open and 
            happy to hear from you. I always get an acknowledgment for my side.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="w-fit mt-9 border border-teal-400 hover:bg-teal-400/10 cursor-pointer rounded flex items-center text-teal-400 transition-all duration-300"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://mail.google.com/mail/?view=cm&to=kdisop2003@gmail.com&su=Hello%20from%20your%20portfolio&body=Hi%20there,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards"
          className="px-[30px] py-[18px] text-[14px] font-mono"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  )
}
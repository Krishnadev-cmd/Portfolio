'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '@/lib/data'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Who I Am</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I have experience working with modern technologies and frameworks, 
                always eager to learn and take on new challenges. I believe in writing 
                clean, maintainable code and creating user experiences that make a difference.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">{personalInfo.email}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">What I Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4 mt-1">
                    🎨
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800">UI/UX Design</h4>
                    <p className="text-gray-600">Creating beautiful and intuitive user interfaces</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4 mt-1">
                    💻
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Frontend Development</h4>
                    <p className="text-gray-600">Building responsive and interactive web applications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4 mt-1">
                    ⚙️
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Backend Development</h4>
                    <p className="text-gray-600">Developing robust server-side solutions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
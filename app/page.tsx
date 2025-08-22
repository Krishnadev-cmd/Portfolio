import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
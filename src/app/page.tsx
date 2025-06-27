import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Leadership } from '../components/Leadership'
import { Experience } from '../components/Experience'
import { Skills } from '../components/Skills'
import { Videos } from '../components/Videos'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white text-gray-800 min-h-screen font-mono">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Leadership />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

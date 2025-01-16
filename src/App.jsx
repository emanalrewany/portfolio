import { Header } from './components/layout/Header'
import { Nav } from './components/layout/Nav'
import { Hero } from './components/sections/Hero'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Footer } from './components/layout/Footer'

export const App = () => {
  return (
    <main className="relative">
      <Header />
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}
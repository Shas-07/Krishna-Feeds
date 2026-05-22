import { useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { ScrollProgress } from './components/ScrollProgress'
import { WhyChooseUs } from './components/WhyChooseUs'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

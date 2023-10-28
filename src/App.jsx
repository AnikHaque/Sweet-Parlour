import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Header } from './components/Header'
import { Service } from './components/Service'
import { Project } from './components/Project'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
      <Hero></Hero>
      <About></About>
      <Service></Service>
      <Project></Project>
      <Footer></Footer>

    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { Header } from './components/header'
import { AboutMe } from './components/AboutMe'
import { Projects } from './components/Projects'
import { Form } from './components/Form'
import { Footer } from './components/Footer'
import { SideBar } from './components/SideBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SideBar/>
      <Header/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App

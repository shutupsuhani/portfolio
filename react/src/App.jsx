import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Timeline from "./components/Timeline"
import Topbar from "./components/Topbar"


function App() {
  

  return (
    <>
    <div className="w-full h-full">
    <Topbar />
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App

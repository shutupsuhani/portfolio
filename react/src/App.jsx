import About from "./components/About"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Timeline from "./components/Timeline"
import Topbar from "./components/Topbar"


function App() {
  

  return (
    <>
    <div className="w-full h-full bg-slate-300">
    <Topbar/>
    <Home/>
    <About/>
    <Timeline/>
    <Skills/>
    </div>
    </>
  )
}

export default App

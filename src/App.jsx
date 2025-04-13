import { useState } from "react"
import Main from "./components/Main/Main"
import TopBar from "./components/TopBar/TopBar"
import WorkExperince from "./components/WorkExp/WorkExperince"
import Projects from "./components/Projects/Projects"

function App() {
  const [pages, setPages] = useState(true)


  return (
    <>
      <TopBar setPages={setPages}/>

      {pages ? <Main/>: <Projects/> }
      
     
    </>
  )
}

export default App

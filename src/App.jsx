import Background from './Utils/Background'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Resume from './Pages/Resume/Resume'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'

function App() {

  return (
    <>
      <Background numStars={200} />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/resume' element={<Resume />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

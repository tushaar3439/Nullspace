
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Opportunities from './Pages/Opportunities'
import Login from './Pages/Login'
import Services from './Pages/Services'

function App() {

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800  text-white">
  {/* Your content */}


      <BrowserRouter>
      <Navbar/>
       
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/Opportunities' element={<Opportunities/>}/>
        <Route path='/create' element={<h1>create page</h1>}/>
        <Route path='/profile' element={<h1>profile page</h1>}/>
        <Route path='/setting' element={<h1>setting page</h1>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
      <Footer/>

      </BrowserRouter>
      </div>
    </>
  )
}

export default App

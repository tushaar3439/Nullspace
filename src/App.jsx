
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Search from './Components/Search'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'

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
        <Route path='/contact' element={<h1>contact page</h1>}/>
        <Route path='/events' element={<h1>events page</h1>}/>
        <Route path='/create' element={<h1>create page</h1>}/>
        <Route path='/profile' element={<h1>profile page</h1>}/>
        <Route path='/setting' element={<h1>setting page</h1>}/>
        <Route path='/login' element={<h1>login</h1>}/>
      </Routes>
      
      <Footer/>

      </BrowserRouter>
      </div>
    </>
  )
}

export default App

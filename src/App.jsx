
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './common/components/Footer'
import Header from './common/components/Header'
import Home from './common/pages/Home'
import Contact from './common/pages/Contact'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      {/* common pages */}
      <Route path='/' element={<Home/>} />
     <Route path='/contact' element={<Contact/>} />

    </Routes>
     <Footer/>
    </>
  )
}

export default App

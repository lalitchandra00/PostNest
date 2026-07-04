import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/home'
import Post from './pages/post'
import Login from './pages/login'

import './App.css'

function App() {
  return (
    <>
    <div className = "bg-[#F2EFE9] w-screen h-screen">
      <Navigation />
      <main className="">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main> 
      
    </div>
      
    </>
  )
}

export default App

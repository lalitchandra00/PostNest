import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/home'
import Posts from './pages/posts'
import Profile from './pages/profile'
import Signup from './pages/signup'
import Login from './pages/login'

import './App.css'

function App() {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f1e8] via-[#f8f5ef] to-[#edf2f7] text-slate-800">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        {pathname !== '/login' && pathname !== '/signup' && <Navigation />}
        <main className="flex-1 pt-4 sm:pt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App

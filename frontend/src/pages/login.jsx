import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../app/authSlice'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success) {
        localStorage.setItem('accessToken', data.data.accessToken)
        dispatch(login(data.data.user))
        navigate('/')
      } else {
        setError(data.message)
      }
    } catch (err) {
      console.error("Login error:", err)
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="flex min-h-full items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur">
        <h2 className="mb-6 text-center text-3xl font-bold text-slate-800">Welcome back</h2>
        <p className="mb-8 text-center text-sm text-slate-500">
          Don&apos;t have an account? <a href="/signup" className="font-medium text-[#c65a2e] hover:text-[#a84820]">Sign up</a>
        </p>
        {error && (
          <p className="mb-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[#c65a2e] focus:ring-2 focus:ring-[#c65a2e]/20"
              placeholder="lalit@example.com" required />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[#c65a2e] focus:ring-2 focus:ring-[#c65a2e]/20"
              placeholder="••••••••" required />
          </div>
          <button type="submit"
            className="w-full rounded-lg bg-[#2b3b4e] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#1f2c3a] focus:outline-none focus:ring-2 focus:ring-[#2b3b4e]/40 focus:ring-offset-2">
            Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

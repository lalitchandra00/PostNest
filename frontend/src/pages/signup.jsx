import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../app/authSlice'

function signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    profilepic: null,
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilepic: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const fd = new FormData()
    fd.append('name', formData.name)
    fd.append('username', formData.username)
    fd.append('email', formData.email)
    fd.append('password', formData.password)
    if (formData.profilepic) {
      fd.append('profilepic', formData.profilepic)
    }
    try {
      const res = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        body: fd,
      })
      const data = await res.json()
      if (data.success) {
        dispatch(login(data.data))
        navigate('/')
      } else {
        setError(data.message)
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="flex min-h-full items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur">
        <h2 className="mb-6 text-center text-3xl font-bold text-slate-800">Create an account</h2>
        <p className="mb-8 text-center text-sm text-slate-500">
          Already have an account? <a href="/login" className="font-medium text-[#c65a2e] hover:text-[#a84820]">Login</a>
        </p>
        {error && (
          <p className="mb-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[#c65a2e] focus:ring-2 focus:ring-[#c65a2e]/20"
              placeholder="Lalit Chandra" required />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[#c65a2e] focus:ring-2 focus:ring-[#c65a2e]/20"
              placeholder="lalit_chandra00" required />
          </div>
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
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Profile Picture</label>
            <input type="file" name="profilepic" onChange={handleFileChange}
              accept="image/*"
              className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#c65a2e]/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-[#c65a2e] hover:file:bg-[#c65a2e]/20" />
          </div>
          <button type="submit"
            className="w-full rounded-lg bg-[#2b3b4e] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#1f2c3a] focus:outline-none focus:ring-2 focus:ring-[#2b3b4e]/40 focus:ring-offset-2">
            Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default signup
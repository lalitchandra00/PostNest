import React from 'react'

function signup() {
  return (
    <div className="flex min-h-full items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur">
        <h2 className="mb-6 text-center text-3xl font-bold text-slate-800">Create an account</h2>
        <p className="mb-8 text-center text-sm text-slate-500">
          Already have an account? <a href="/login" className="font-medium text-[#c65a2e] hover:text-[#a84820]">Login</a>
        </p>
        <form action="" className="space-y-5">
          <div>
            <label
            className="mb-1.5 block text-sm font-medium text-slate-700">
            Name</label>
            <input type="text"
            className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[#c65a2e] focus:ring-2 focus:ring-[#c65a2e]/20" 
            placeholder="Lalit Chandra"/>
          </div>

          <div>
            <label 
            className="mb-1.5 block text-sm font-medium text-slate-700">
            Username</label>
            <input type="text" 
            className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[#c65a2e] focus:ring-2 focus:ring-[#c65a2e]/20"
            placeholder="lalit_chandra00"/>
          </div>

          <div>
            <label 
            className="mb-1.5 block text-sm font-medium text-slate-700">
            Email</label>
            <input type="email" 
            className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[#c65a2e] focus:ring-2 focus:ring-[#c65a2e]/20" 
            placeholder="john@example.com"/>
          </div>

          <div>
            <label 
            className="mb-1.5 block text-sm font-medium text-slate-700">
            Password</label>
            <input type="password" 
            className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[#c65a2e] focus:ring-2 focus:ring-[#c65a2e]/20" 
            placeholder="••••••••"/>
          </div>

          <div>
            <label 
            className="mb-1.5 block text-sm font-medium text-slate-700">
            Profile Picture</label>
            <input type="file"
            className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#c65a2e]/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-[#c65a2e] hover:file:bg-[#c65a2e]/20"/>
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

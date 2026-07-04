
import { NavLink } from "react-router-dom"

import React from 'react'

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur sm:px-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          Post<span className="text-[#c65a2e]">Nest</span>
        </h1>
        <p className="text-xs text-slate-500 sm:text-sm">Your space to read, write, and connect</p>
      </div>
      <div className="flex items-center gap-2 text-sm font-medium sm:gap-4 sm:text-base">
        <NavLink
          to='/'
          className={({ isActive }) =>
            `rounded-full px-3 py-2 transition ${isActive
              ? 'bg-[#2b3b4e] text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`
          }
        >Home</NavLink>

        <NavLink
          to='/posts'
          className={({ isActive }) =>
            `rounded-full px-3 py-2 transition ${isActive
              ? 'bg-[#2b3b4e] text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`
          }
        >Posts</NavLink>

        <NavLink
          to='/profile'
          className={({ isActive }) =>
            `rounded-full px-3 py-2 transition ${isActive
              ? 'bg-[#2b3b4e] text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`
          }
        >Profile</NavLink>
      </div>
    </nav>

  )
}

export default Navigation

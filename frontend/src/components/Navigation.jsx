
import { NavLink } from "react-router-dom"

import React from 'react'

const Navigation = () => {
  return (
    <nav className="p-4 flex justify-between">
      <div className = "">
        <text class="text-2xl font-bold tracking-tight text-[#2B3B4E]">
          Post<span class="text-[#B4421A] font-medium">Nest</span>
        </text>
      </div>
      <div className="flex  gap-10 text-lg">
        <NavLink
          to='/home'
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${isActive
              ? "text-orange-700"
              : "text-gray-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >Home</NavLink>

        <NavLink
          to='/post'
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${isActive
              ? "text-orange-700"
              : "text-gray-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >Post</NavLink>

        <NavLink
          to='/login'
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${isActive
              ? "text-orange-700"
              : "text-gray-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >Logout</NavLink>
      </div>
    </nav>

  )
}

export default Navigation

import React from 'react'
import logo from "../assets/logo.svg"
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { menuItemsData } from './menuItemsData.js'

function Sidebar({ Sidebar_open, setSidebar_open }) {
  const navigate = useNavigate();

  return (
    <div className="">
      <aside className=" w-60 bg-gray-100 h-screen shadow-2xl">
        <div>
          <img className="-ml-0.5" src={logo} alt="Logo" onClick={() => navigate('/')} />
          <hr className="border-gray-300 mb-8" />
        </div>
        {menuItemsData.map((item, index) => (
          <NavLink key={index} to={item.to} className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-200'}`
          }>
            <item.Icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </aside>
    </div>


  )

}

export default Sidebar
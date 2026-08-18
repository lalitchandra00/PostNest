import React from 'react'
import logo from "../assets/logo.svg"
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { menuItemsData } from './menuItemsData.js'
import { dummyUserData } from "../assets/assets"
import { CirclePlus, LogOut } from 'lucide-react'
import { useClerk } from '@clerk/react'

function Sidebar({ Sidebar_open, setSidebar_open }) {
  const navigate = useNavigate();
  const user = dummyUserData;
  const {signOut} = useClerk()
  return (
    <div className="">
      <aside className="w-60 bg-gray-50 h-screen shadow-2xl flex flex-col">
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
        <button
          type="button"
          className="mt-6 ml-6 flex w-[170px] items-center justify-center gap-2 rounded-full bg-gradient-to-r  from-indigo-500 to-purple-600 px-6 py-3 text-white shadow-md  duration-200 hover:from-indigo-600 hover:to-purple-700 hover:scale-105"
          onClick={() => navigate('/createpost')}
        >
          <span>Create Post</span>
          <CirclePlus className="h-5 w-5 mt-0.5 " />
        </button>

        <div className="mt-auto px-5 py-4 flex flex-row gap-3" onClick={() => navigate('/profile')}>

          <img className='rounded-full size-10' src={user.profile_picture} alt="" />
          <div className='flex flex-col '>
            <p className='m-0 font-bold'>{user.full_name}</p>
            <p className='m-0 text-sm'>@{user.username}</p> 
            
          </div>
          <LogOut className="w-4 cursor-pointer text-gray-600 mt-3 ml-4 " onClick={signOut} />
          

        </div>
      </aside>
    </div>


  )

}

export default Sidebar
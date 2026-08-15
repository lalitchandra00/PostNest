import React from 'react'
import { useState } from 'react'
import { Heading3, Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { dummyUserData } from "../assets/assets"
import { Outlet } from 'react-router-dom'


function Layout() {
  const user = dummyUserData;
  const [Sidebar_open, setSidebar_open] = useState(false);
  return user ? (
    <div className="w-full flex-row w-screen">
      <Sidebar Sidebar_open = {Sidebar_open} setSidebar_open = {setSidebar_open}/>
      <div className = "flex-1">
        <Outlet />
      </div>

      <div className = "p-4">
        {
          Sidebar_open && <Sidebar /> ?
            <X className="border-2 rounded-lg" onClick={() => setSidebar_open(false)} />
            :
            <Menu className=" p-0.5 border-2 rounded-md" onClick={() => setSidebar_open(true)} />
        }
        
      </div>

      



    </div>
  )
    :
    (
      <h3>You are not logged in.</h3>
    )
}

export default Layout

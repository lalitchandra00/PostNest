import React from 'react'
import { useState } from 'react'

import Sidebar from '../components/Sidebar'
import { dummyUserData } from "../assets/assets"
import { Outlet } from 'react-router-dom'


function Layout() {
  const user = dummyUserData;
  const [Sidebar_open, setSidebar_open] = useState(false);
  return user ? (
    <div className = "flex">
      <Sidebar Sidebar_open = {Sidebar_open} setSidebar_open = {setSidebar_open}/>
      <div>
        <Outlet />
      </div>

      <div className = "p-4">
        
        
      </div>

      



    </div>
  )
    :
    (
      <h3>You are not logged in.</h3>
    )
}

export default Layout

import React from 'react'
import {useState} from 'react'
import { Heading3, Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import {dummyUserData} from "../assets/assets"


function Layout() {
  const user = dummyUserData
  const [Sidebar_open, setSidebar_open] = useState(true);
  return  user ? (
    <div className = "w-full flex w-screen">
      <Sidebar />
      {
        Sidebar_open ?
        <X className = "absolute top" onClick ={() => setSidebar_open(false)}/>
        :
        <Menu className = "" onClick ={() => setSidebar_open(true)}/>
      }
      <div>
        Layout
      </div>
        

    </div>
  )
  :
  (
    <h3>You are not logged in.</h3>
  )
}

export default Layout
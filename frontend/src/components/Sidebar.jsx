import React from 'react'
import logo from "../assets/logo.svg"
import { useNavigate } from 'react-router-dom'

function Sidebar({ Sidebar_open, setSidebar_open }) {
  const navigate = useNavigate();

  return (
    <div  className = "">
      <aside className=" w-60 bg-gray-100 h-screen shadow-2xl">
      <div>
        <img className="-ml-0.5" src={logo} alt="Logo" onClick = {() => navigate('/')}/>
        <hr className = "border-gray-300 mb-8" />
      </div>
      hii
    </aside>
    </div>
    

  )

}

export default Sidebar
import React from 'react'
import bgImage from "../assets/bgImage.png"
import logo from "../assets/logo.svg"

function Login() {
  return (
    <div className = "min-h-screen">
      <img className = "absolute top-0 left-0 h-full w-full"
      src= {bgImage} alt="bgImage Error" />
      <div>
        <img className = "h-15"
        src= {logo} alt="logo Error" />
      </div>
    </div>
  )
}

export default Login
import React from 'react'
import bgImage from "../assets/bgImage.png"
import logo from "../assets/logo.svg"
import group_users from "../assets/group_users.png"

function Login() {
  return (
    <div className=" min-h-screen">

      <img className="absolute top-0 left-0 h-full w-full"
        src={bgImage} alt="bgImage Error" />

      <div className = "flex flex-col">
        <div>
          <img className="h-15"
            src={logo} alt="logo Error" />
        </div>

        <div className="flex flex-col">
          <img className="h-6 w-15 flex items-center"
            src={group_users} alt="group users"/>
          Connect, share, and discover what matters to you.
        </div>
      </div>

    </div>
  )
}

export default Login
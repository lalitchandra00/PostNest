import React from 'react'
import {useState} from 'react'
import bgImage from "../assets/bgImage.png"
import logo from "../assets/logo.svg"
import group_users from "../assets/group_users.png"

function Login() {
  const [form, setform] = useState('signup');

  return (
    <div className="min-h-screen flex flex-col">

      <img className="absolute top-0 left-0 h-full w-full"
        src={bgImage} alt="bgImage Error" />


      <div className = "flex flex-col">
        <div>
          <img className="h-15"
            src={logo} alt="logo Error" />
        </div>

        <div className="flex flex-col mt-60 ml-10">
          <img className="h-10 w-25 flex items-baseline"
            src={group_users} alt="group users"/>
            <span className = "font-bold text-3xl text-blue-700 " style={{ fontFamily: 'Roboto, sans-serif' }}>
              Connect, share, and discover what matters to you.
            </span>
            <span className = "text-blue-800" style = {{fontFamily: "Playwrite IE, cursive"}}>
              Find friends on PostNest
            </span>

            
            {form === "login" ? 
            <form className = "absolute right-5">
                {form === "login"}
                hii
              </form>
            :
              <form className = "absolute right-25">
                {form === "signup"}
                <input className = "border" placeholder = "username" type="text" />
              </form>
            }
              
        </div>
      </div>

    </div>
  )
}

export default Login
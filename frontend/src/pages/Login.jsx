import React from 'react'
import { useState } from 'react'
import bgImage from "../assets/bgImage.png"
import logo from "../assets/logo.svg"
import group_users from "../assets/group_users.png"

import { SignIn } from "@clerk/react"

function Login() {

  return (
    <div className="min-h-screen flex flex-col">

      <img className="absolute top-0 left-0 h-full w-full"
        src={bgImage} alt="bgImage Error" />


      <div className="flex flex-col">
        <div>
          <img className="h-15"
            src={logo} alt="logo Error" />
        </div>

        <div className="flex flex-col mt-55 ml-10 mr-150">
          <img className="h-10 w-25 flex items-baseline"
            src={group_users} alt="group users" />
          <span className="font-bold text-4xl text-blue-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Connect, share, and discover what matters to you.
          </span>
          <span className="text-blue-800" style={{ fontFamily: "Playwrite IE, cursive" }}>
            Find friends on PostNest
          </span>

          <div className="absolute right-25 top-20 ">
            <SignIn
              appearance={{
                options: {
                  unsafe_disableDevelopmentModeWarnings: true, 
                },
                variables: {
                  colorPrimary: "#1d4ed8",       
                  colorText: "#334155",
                  colorTextSecondary: "#64748b",
                  colorBackground: "#ffffff",      
                  colorInputBackground: "#ffffff",
                  colorInputText: "#0f172a",
                  colorInputBorder: "#cbd5e1",
                  borderRadius: "0.75rem",       
                  fontSize: "0.875rem",
                  fontFamily: "Roboto, sans-serif", 
                },
                elements: {
                  footer: "hidden",              
                  card: "shadow-xl rounded-2xl",
                  headerTitle: "font-semibold text-blue-800",
                  formButtonPrimary: "bg-blue-700 hover:bg-blue-800",
                  formFieldInput: "focus:border-blue-700 focus:ring-blue-700",
                  dividerLine: "bg-slate-200",
                },
              }}></SignIn>

          </div>

          {/*             
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
            } */}

        </div>
      </div>

    </div>
  )
}

export default Login
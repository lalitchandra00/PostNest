import React from 'react'
import bgImage from "../assets/bgImage.png"
import logo from "../assets/logo.svg"
import group_users from "../assets/group_users.png"

import { SignIn } from "@clerk/react"

function Login() {

  return (
    <div className="relative min-h-screen overflow-hidden">

      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={bgImage}
        alt="bgImage Error"
      />


      <div className="relative z-10 flex min-h-screen flex-col px-4 py-4 sm:px-6 lg:px-10 lg:py-6">
        <div>
          <img
            className="h-12 w-auto sm:h-14"
            src={logo}
            alt="logo Error"
          />
        </div>

        <div className="mt-12 flex flex-1 flex-col gap-8 lg:mt-24 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-3 lg:pt-12">
            <img
              className="h-10 w-24 object-contain"
              src={group_users}
              alt="group users"
            />
            <span className="text-3xl font-bold leading-tight text-blue-700 sm:text-4xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Connect, share, and discover what matters to you.
            </span>
            <span className="text-blue-800" style={{ fontFamily: "Playwrite IE, cursive" }}>
              Find friends on PostNest
            </span>
          </div>

          <div className="w-full max-w-md lg:-mt-20">
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
              }}
            />
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
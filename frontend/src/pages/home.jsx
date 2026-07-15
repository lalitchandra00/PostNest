import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const userData = useSelector((state) => state.userData)

  return (
        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          Hello, {userData.name}
        </h2>
  )
}

export default Home
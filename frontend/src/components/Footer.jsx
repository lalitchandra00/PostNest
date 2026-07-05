import React from 'react'

function Footer() {
  return (
    <div className="mt-auto border-t border-slate-200 bg-slate-50/80 px-4 py-4 text-center text-xs text-slate-400 backdrop-blur sm:text-sm">
      &copy; {new Date().getFullYear()} PostNest. All rights reserved.
    </div>
  )
}

export default Footer
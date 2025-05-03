import React from 'react'

export const NavItem = ({ onClick, to, children }) => {
  return (
    <a
      onClick={onClick}
      className=' px-10 py-4 my-5 font-inter font-semibold text-4xl text-slate-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-indigo-600 hover:to-pink-500'
      href={to}
    >
      {children}
    </a>
  )
}

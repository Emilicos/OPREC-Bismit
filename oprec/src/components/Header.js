import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className = "flex list-none py-8 px-12 font-bold text-xl">
            <li className = "mr-2 text-gray-700 cursor-pointer"> Home </li>
            <li className = "mr-2 text-gray-500"> <span> {'>'} </span> </li>
            <li className = "text-orange-400 cursor-pointer"> Kontak Kami </li>
        </nav>
    </div>
  )
}

export default Header
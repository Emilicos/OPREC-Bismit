import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Kontak = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:border-b-2 md:border-gray-200 md:pb-10 mb-8'>
        <div className='flex md:justify-center items-center flex-wrap'>
            <FontAwesomeIcon icon= {faPhone} className = "text-3xl text-orange-300 pr-2"/> 
            <p className = "font-semibold"> +62 851-5995-4161 </p>
        </div>
        <div className = "flex md:border-r-2 mx-2 mb-4 md:mb-0"></div>
        <div className='flex md:justify-center items-center flex-wrap'>
            <FontAwesomeIcon icon= {faEnvelope} className = "text-3xl text-orange-300 pr-2"/> <p className='font-semibold'> customer@sabilamall.co.id</p>
        </div>
    </div>
  )
}

export default Kontak
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

const Form = () => {
  return (
    <div>
        <h2 className = "text-3xl text-gray-700 font-extrabold"> Tinggalkan Pesan </h2>
        <form className = "flex-col mb-16">
            <div>
                <FontAwesomeIcon icon= {faUserFriends} className = "p-4 text-1xl text-gray-400 pr-2 absolute"/> 
                <input className = "px-12 py-2 mb-4 mt-8 block w-full border-2 border-gray-400" type = "text" placeholder="Nama Anda"/>
            </div>
            <div>
                <FontAwesomeIcon icon= {faEnvelope} className = "p-4 text-1xl text-gray-400 pr-2 absolute"/> 
                <input className = "px-12 py-2 mb-4 mt-8 block w-full border-2 border-gray-400" type = "text" placeholder='Alamat email Anda' />
            </div>
            <div>
                <FontAwesomeIcon icon= {faPhone} className = "p-4 text-1xl text-gray-400 pr-2 absolute"/> 
                <input className = "px-12 py-2 mb-4 mt-8 block w-full border-2 border-gray-400" type = "text" placeholder='Nomor telepon Anda' />
            </div>
            <div>
                <textarea className = "px-4 py-2 block w-full border-2 border-gray-400" type = "text" placeholder='Tuliskan pesan anda disini'/>
            </div>
            <div className = "flex justify-end">
                <input type = "submit" value='Kirim' className = "cursor-pointer my-8 w-full md:max-w-fit md:px-20 py-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-400 hover:ring-1"/>
            </div>
        </form>
    </div>
  )
}

export default Form
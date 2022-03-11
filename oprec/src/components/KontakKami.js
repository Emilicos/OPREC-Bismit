import React from 'react'
import Map from "../image 1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

const KontakKami = () => {
  return (
    <div>
        <div>
            <img className = "pb-8 md:block md:w-full m-auto" src = {Map} alt = "map"/>
            <div className = "grid grid-cols-6 md:gap-4">
                <div className = "col-span-1 justify-center items-start flex">  
                     <FontAwesomeIcon icon= {faLocationDot} className = "text-5xl text-orange-400"/>
                </div>
                <div className = "col-span-5">
                    <p className = "pb-4 text-gray-700"> Satria Building 2nd Lt 2 Unit A204-A206, 
                    Jl. Akses UI No.24-26, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat Depok Jawa Barat, 16451 Indonesia </p>

                    <a href="/#"><button className = "border-2 border-orange-400 text-orange-400 px-6 py-1 rounded-md font-bold hover:bg-orange-400 hover:text-white hover: outline-none mb-8"> Lihat di google maps </button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KontakKami
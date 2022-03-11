import React from 'react'
import Maskot from "../Mascot.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons' 

const Medsos = () => {
  return (
    <div className = "flex flex-col justify-end items-center text-center">
        <div>
            <img src = {Maskot} className = "block" alt = 'maskot'/>
        </div>
        <h2 className = "text-gray-700 font-extrabold text-2xl my-2"> Follow SabilaMall yuk! </h2>
        <div className = "flex mt-2">
            <a href="/#">
                <FontAwesomeIcon icon= {faFacebookSquare} className = "text-5xl text-orange-400 mx-2"/>
            </a>
            <a href="/#">
                <FontAwesomeIcon icon= {faTwitter} className = "text-5xl text-orange-400 mx-2"/>
            </a>
            <a href="/#">
                <FontAwesomeIcon icon= {faInstagram} className = "text-5xl text-orange-400 mx-2"/>
            </a>
            <a href="/#">
                <FontAwesomeIcon icon= {faLinkedin} className = "text-5xl text-orange-400 mx-2"/>
            </a>
        </div>
    </div>
  )
}

export default Medsos
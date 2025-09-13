import React from 'react'
import './navbar.css'
import { FiShare } from "react-icons/fi";
import { IoSparklesSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

const navbar = () => {
  return (
    <div className="ChatNavbar">
      <div className="ChatNavbar-in">
        <div className="ChatNavbar-in-one">
          <div className="ChatNavbar-in-one-a">
          <h1>Orbita GPT</h1>
          </div>
          <div className="ChatNavbar-in-one-b">
            <button>plus</button>
          </div>
        </div>
        <div className="ChatNavbar-in-two">
          <div className="ChatNavbar-in-two-a">
            <button>Configuration <IoSettingsOutline /></button>
            
          </div>
          <div className="ChatNavbar-in-two-b">
            <button>Share <FiShare /></button>
          </div>
          <div className="ChatNavbar-in-two-c">
            <button>New Chat <IoSparklesSharp /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default navbar
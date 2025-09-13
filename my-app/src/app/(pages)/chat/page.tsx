import React from 'react'

import './page.css'
import Navbar from '@/app/components/chat/navbar/navbar'
import HeroSection from '@/app/components/chat/herosection'
const page = () => {
  return (
      <div className="ChatComponent">
        <div className="ChatComponent-in">

            <div className="chat-one">

            </div>
            <div className="chat-two">
                <div className="chat-two-in">
                    <div className="chat-two-nav">
                      <Navbar />
                    </div>
                    <div className="chat-two-content">
                      <HeroSection />
                    </div>
                    <div className="chat-two-input">
                      <input type="text" placeholder='Type your message here...' />
                    </div>
                </div>
            </div>

        </div>
      </div>
  )
}

export default page
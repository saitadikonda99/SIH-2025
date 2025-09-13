import React from 'react'

import './page.css'
import Navbar from '@/app/components/chat/navbar/navbar'

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
                      <h1>This is Chat Content</h1>
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
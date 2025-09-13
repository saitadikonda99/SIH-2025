import React from 'react'


import './home.css'
import Link from 'next/link'

const page = () => {
  return (
        <div className="HomePageComponent">
            <div className="HomePageComponent-in">
                <h1>Home Page</h1>
                <Link href="/chat">Had any issues? Let's chat 😉</Link>
            </div>
        </div>
  )
}

export default page
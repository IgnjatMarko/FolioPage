import React from 'react'
import { Menu } from './Menu'
import { Navbar } from './Navbar'

export const Hero = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://www.list-malerei.at/uploads/USngCD2b/slide-home-1.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60">
    <Navbar/>
    <Menu/>
  </div>
  <div className="hero-content text-neutral-50 text-center">

    <div className="max-w-md">
        <img className='mx-auto mb-5' src="/logo.png" alt="Logo"></img>
      <h1 className="mb-5 text-5xl font-bold">GRO-BUILD</h1>
      <p className="mb-5">
        Jovan Savić
      </p>
      {/* <a href='#contact' className="btn btn-primary">Kontakt</a> */}
    </div>
  </div>
</div>
  )
}

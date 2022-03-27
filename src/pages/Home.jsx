import React from 'react'
import Navbar from '../components/navbar/Navbar';
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="main-section">
        <div className="main-content">
          <i className='bx bx-menu' ></i>
          <span className="text">home</span>
        </div>
      </section>
    </>
  )
}

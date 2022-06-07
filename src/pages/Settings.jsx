import React from 'react'
import Navbar from '../components/navbar/Navbar';

export default function Settings() {
  return (
    <>
     <Navbar />
      <main className="main-section">
        <div className="main-content">
          <i className='bx bx-menu' ></i>
          <span className="text">settings</span>
        </div>
      </main>
    </>
  )
}

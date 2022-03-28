import React from 'react'
import Navbar from '../components/navbar/Navbar';

export default function Analytics() {
  return (
    <>
     <Navbar />
      <div>Analytics</div>
      <main className="main-section">
        <div className="main-content">
          <i className='bx bx-menu' ></i>
          <span className="text">Analytics</span>
        </div>
      </main>
    </>
  )
}

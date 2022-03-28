import React from 'react'
import Navbar from '../components/navbar/Navbar';

export default function Posts() {
  return (
    <>
     <Navbar />
      <main className="main-section">
        <div className="main-content">
          <i className='bx bx-menu' ></i>
          <span className="text">posts</span>
        </div>
      </main>
    </>

  )
}
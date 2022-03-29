import React from 'react'
import Navbar from '../components/navbar/Navbar';
import MainHome from '../components/home/MainHome';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-container">          
          <MainHome />
      </main>
    </>
  )
}

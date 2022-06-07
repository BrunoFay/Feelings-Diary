import React from 'react';
import MainHome from '../components/home/MainHome';
import Navbar from '../components/navbar/Navbar';

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

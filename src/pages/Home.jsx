import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbar/Navbar';
import MainHome from '../components/home/MainHome';
import { darkModeContext } from '../context/darkModeContext';

export default function Home() {
  const { isDarkMode } = useContext(darkModeContext)
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "var(--colorMainHomeContainer)"
    }
    return()=> document.body.style.backgroundColor = "var(--bgcolorDWMSection)"
  }, [isDarkMode])
  return (
    <>
      <Navbar />
      <main className="main-container">
        <MainHome />
      </main>
    </>
  )
}

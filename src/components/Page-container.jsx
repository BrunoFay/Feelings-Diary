import React, { useContext,useEffect } from 'react'
import { darkModeContext } from '../context/darkmode/darkModeContext'
export default function PageContainer({ children }) {
  const { isDarkMode } = useContext(darkModeContext)
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "var(--colorMainHomeContainer)"
    }
    return () => document.body.style.backgroundColor = "var(--bgcolorDWMSection)"
  }, [isDarkMode])
  return (
    <main className={isDarkMode ? 'page-container darkmode-pageContainer' : 'page-container'}>
      {children}
    </main>
  )
}

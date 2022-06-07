import React, { useContext, } from 'react'
import {darkModeContext} from '../context/darkModeContext'
export default function PageContainer({ children }) {
  const { isDarkMode } = useContext(darkModeContext)
  return (
    <main className={isDarkMode ? 'page-container darkmode-pageContainer' : 'page-container'}>
      {children}
    </main>
  )
}

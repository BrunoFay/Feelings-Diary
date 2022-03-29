import postContext from "./postsContext";
import React, { useState } from 'react'

export default function postContextProvider({ children }) {
  const [notes, setNotes] = useState([])
  
  const contextValue = {
    notes,
    setNotes,
  }
  return (
    <postContext.Provider value={contextValue}>
      {children}
    </postContext.Provider>
  )
}

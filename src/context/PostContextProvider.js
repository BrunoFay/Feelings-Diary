import postContext from "./postsContext";
import React, { useState } from 'react'

const MAX_PORCENTAGE = 100;
const MIN_PORCENTAGE = 0;
const INITIAL_STATE_VISIBLE = {
  visibleForm: false,
  visibleCard: true,
}
export default function PostContextProvider({ children }) {

  const [notes, setNotes] = useState([])
  const [visible, setVisible] = useState(INITIAL_STATE_VISIBLE)

  const percentageArray = notes.map(({ feeling }) => feeling)
  const calculatePercentage = (array, item) => {
    const total = array.length
    const percentage = (array.filter(i => i === item).length / total) * MAX_PORCENTAGE
    const roundedPercentage = Math.round(percentage)
    return roundedPercentage || MIN_PORCENTAGE
  }
  const contextValue = {
    notes,
    setNotes,
    percentageArray,
    calculatePercentage,
    visible,
    setVisible
  }
  return (
    <postContext.Provider value={contextValue}>
      {children}
    </postContext.Provider>
  )
}

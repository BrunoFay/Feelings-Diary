import React from 'react'
import {scheduleContext} from './scheduleContext'
export default function ScheduleContextProvider({ children }) {
  const valueToProvide = {}
  return (
    <scheduleContext.Provider value={valueToProvide}>
      {children}
    </scheduleContext.Provider>
  )
}

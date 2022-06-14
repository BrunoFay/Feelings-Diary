import React, { useState } from 'react'
import { scheduleContext } from './scheduleContext'
export default function ScheduleContextProvider({ children }) {
  const [schedule, setSchedule] = useState([])
  const valueToProvide = {
    schedule,
    setSchedule
  }
  return (
    <scheduleContext.Provider value={valueToProvide}>
      {children}
    </scheduleContext.Provider>
  )
}

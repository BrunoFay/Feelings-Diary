import React from 'react'
import { useContext } from 'react'
import { useHandleChange } from '../../hooks/useHandleChange'
import { scheduleContext } from '../../context/schedule/scheduleContext'

const INITIAL_MARK_STATE = {
  scheduleType: 'events',
  description: '',
  scheduleDate: ''
}
export default function NewMarkModal({ date }) {
  const [
    newSchedule,
    setNewSchedule,
    handleChange
  ] = useHandleChange(INITIAL_MARK_STATE)
  const { schedule, setSchedule } = useContext(scheduleContext)

  function handleClick(e) {
    e.preventDefault()
    const dateFormated = date.toDateString()
    setSchedule([...schedule, { ...newSchedule, scheduleDate: dateFormated }])
    setNewSchedule(INITIAL_MARK_STATE)
  }

  return (
    <div className='modal-container'>
      <h2>Mark on calendar</h2>
      <form onSubmit={handleClick} className='modal-form'>
        <select
          name='scheduleType'
          value={newSchedule.scheduleType}
          onChange={handleChange}
        >
          <option value="events">Events</option>
          <option value="birthdays">Birthdays</option>
          <option value="meetings">Meetings</option>
        </select>
        <textarea
          name="description"
          value={newSchedule.description}
          cols="45"
          rows="10"
          onChange={handleChange} />
        <button type='submit'>Mark</button>
      </form>
    </div>
  )
}

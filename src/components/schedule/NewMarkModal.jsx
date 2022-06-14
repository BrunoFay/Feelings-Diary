import React from 'react'
import { useHandleChange } from '../../hooks/useHandleChange'

const INITIAL_MARK_STATE = {
  scheduleType: 'events',
  description: '',
  scheduleDate: ''
}
export default function NewMarkModal({ date }) {
  const [newSchedule, setNewSchedule, handleChange] = useHandleChange(INITIAL_MARK_STATE)
  function handleClick(e) {
    e.preventDefault()
    setNewSchedule({ ...newSchedule, scheduleDate: date })
  }
 
  return (
    <div className='modal-container'>
      <h2>Mark on calendar</h2>
      <form onSubmit={handleClick} className='modal-form'>
        <select name='scheduleType' value={newSchedule.scheduleType} onChange={handleChange}>
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
      <h1>{newSchedule.description}</h1>
      <h1>{newSchedule.scheduleType}</h1>
      <h1>{newSchedule.scheduleDate.toDateString()}</h1>

    </div>
  )
}

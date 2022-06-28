import React from 'react'
import { useContext } from 'react'
import { useHandleChange } from '../../hooks/useHandleChange'
import { scheduleContext } from '../../context/schedule/scheduleContext'
import { BsGift } from 'react-icons/bs';
import { AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineEventBusy } from 'react-icons/md';
import { useState } from 'react';

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
  const [isFormVisible, setIsFormVisible] = useState(false)
  function handleClick(e) {
    e.preventDefault()
    const dateFormated = date.toDateString()
    setSchedule([...schedule, { ...newSchedule, scheduleDate: dateFormated }])
    setNewSchedule(INITIAL_MARK_STATE)
    setIsFormVisible(false)
  }
  function handleFormVisibility(scheduleType) {
    setNewSchedule({ ...newSchedule, scheduleType })
    setIsFormVisible(true)

  }

  return (
    <div className='modal-container'>
      <h2>Mark on calendar</h2>
      {!isFormVisible && (
        <div className='buttons-container'>
          <button
            onClick={() => handleFormVisibility('events')}
          >
            <MdOutlineEventBusy size={70} color={'#22a6b3'} />
            Events
          </button>
          <button
            onClick={() => handleFormVisibility('birthdays')}
          >
            <BsGift size={70} color={'#e056fd'} />
            Birthdays
          </button>
          <button
            onClick={() => handleFormVisibility('meetings')}
          >
            <AiOutlineTeam size={70} color={'#ff9f1a'} />
            Meetings
          </button>
        </div>
      )}
      {isFormVisible && (
        <form onSubmit={handleClick} className='modal-form'>
          <textarea
            name="description"
            value={newSchedule.description}
            cols="45"
            rows="10"
            onChange={handleChange} />
          <button type='submit'>Mark</button>
        </form>
      )}
    </div>
  )
}

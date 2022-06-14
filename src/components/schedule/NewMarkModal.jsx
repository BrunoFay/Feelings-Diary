import React from 'react'

export default function NewMarkModal() {
  return (
    <div className='modal-container'>
      <h2>Mark on calendar</h2>
      <form action="" className='modal-form'>
        <select>
          <option value="">Events</option>
          <option value="">birthdays</option>
          <option value="">ss</option>
        </select>
        <textarea name="" id="" cols="45" rows="10" />
        <button type='submit'>Mark</button>
      </form>
    </div>
  )
}

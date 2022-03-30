import React from 'react'

export default function NoteContainer({ note }) {

  const day = new Date(note.date).getDate()
  const month = new Date(note.date).toLocaleString('default', { month: 'long' })
  return (
    <div className={`carousel-item ${note.feeling}-container `}>
      <h3>{note.title}</h3>
      <div>
        <span>{note.feeling}</span>
        <hr />
      </div>
      <p>{note.description}</p>
      <span>{month} {day}</span>
    </div>
  )
}

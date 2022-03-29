import React from 'react'

export default function NoteContainer({ note }) {

  const day = new Date(note.date).getDate()
  const month = new Date(note.date).toLocaleString('default', { month: 'long' })
  return (
    <div className='carousel-item'>
      <h1>{note.title}</h1>
      <p>{note.feeling}</p>
      <hr />
      <p>{note.description}</p>
      <p>{month}/{day}</p>
    </div>
  )
}

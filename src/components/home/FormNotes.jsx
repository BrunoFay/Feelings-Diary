import React, { useContext, useState } from 'react'
import postContext from '../../context/postsContext'

const INITIAL_STATE = {
  title: '',
  description: '',
  date: new Date(),
  feeling: 'Happiness',
}
export default function FormNotes({feelings}) {
  const { notes, setNotes } = useContext(postContext)
  const [note, setNote] = useState(INITIAL_STATE)
  const handleChange = ({ target: { name, value } }) => {
    setNote({ ...note, date: new Date(), [name]: value })
  }
  const handleClick = (e) => {
    e.preventDefault()
    setNotes([...notes, note])
    setNote(INITIAL_STATE)
  }
  return (
    <div className="formNote-container">
      <form>
        <select onChange={handleChange} name="feeling" id="">
          {feelings.map(({ title }) => (<option key={title} value={title}>{title}</option>))}
        </select>
        <span>Title</span>
        <input onChange={handleChange} value={note.title} type="text" name='title' />
        <textarea
          onChange={handleChange}
          name="description"
          value={note.description}
          cols="30"
          rows="10" />
        <button onClick={handleClick}>enviar</button>
      </form>
    </div>
  )
}

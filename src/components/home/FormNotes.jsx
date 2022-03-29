import React, { useState } from 'react'

const INITIAL_STATE = {
  title: '',
  description: '',
  date: '',
  feeling: 'Happiness',
}
export default function FormNotes() {
  const [note, setNote] = useState(INITIAL_STATE)
  const handleChange = ({ target: { name, value } }) => { setNote({ ...note, [name]: value }) }
  const handleClick = (e) => { 
    e.preventDefault()
    setNote({ ...note, date: new Date() }) 
  }
  return (
    <div className="formNote-container">
      <form>
        <select   onChange={handleChange} name="feeling" id="">
          <option name="feeling" value='Happiness' >Happiness</option>
          <option name="feeling" value='Sadness'>Sadness</option>
          <option name="feeling" value='Anger'>Anger</option>
          <option name="feeling" value='Fear'>Fear</option>
          <option name="feeling" value='Neutral'>Neutral</option>
        </select>
        <input onChange={handleChange} value={note.title} type="text" name='title' />
        <textarea
          onChange={handleChange}
          name="description"
          value={note.description}
          cols="30"
          rows="10" />
        <button  onClick={handleClick}>enviar</button>
      </form>

    </div>
  )
}

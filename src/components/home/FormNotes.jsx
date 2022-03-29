import React, { useState } from 'react'

const INITIAL_STATE = {
  title: '',
  description: '',
  date: '',
  feeling: 'Happiness',
}
export default function FormNotes() {
  const [notes, setNotes] = useState(INITIAL_STATE)
  const handleChange = ({ target: { name, value } }) => { setNotes({ ...notes, [name]: value }) }
  const handleClick = (e) => { 
    e.preventDefault()
    setNotes({ ...notes, date: new Date() }) 
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
        <input onChange={handleChange} value={notes.title} type="text" name='title' />
        <textarea
          onChange={handleChange}
          name="description"
          value={notes.description}
          cols="30"
          rows="10" />
        <button  onClick={handleClick}>enviar</button>
      </form>

    </div>
  )
}

import React, { useContext, useEffect, useState } from 'react'
import postContext from '../../context/postsContext'
import { IoClose } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
  id: uuidv4(),
  title: '',
  description: '',
  date: new Date(),
  feeling: 'Happiness',
}
export default function FormNotes({ feelings, closeFormFunc }) {
  const { notes, setNotes } = useContext(postContext)
  const [note, setNote] = useState(INITIAL_STATE)
  const [disableBtn, setdisableBtn] = useState(true)

    useEffect(() => {
      if (note.title !== '' || note.description !== '') {
        setdisableBtn(false)
      } else {
        setdisableBtn(true)
      }
    }, [note.title, note.description])

  const handleChange = ({ target: { name, value } }) => {
    setNote({ ...note, date: new Date(), [name]: value })

  }
  const handleClick = (e) => {
    
    e.preventDefault()
    setNotes([...notes, note])
    setNote({...INITIAL_STATE,id: uuidv4()})
  }
  return (
    <div className="formNote-container">
      <form>
        <div className='closeForm-btn' onClick={closeFormFunc}>
          <IoClose />
        </div>
        <select onChange={handleChange} name="feeling" id="fellings">
          {feelings.map(({ title, id }) => (<option key={id} value={title}>{title}</option>))}
        </select>
        <span> Title</span>
        <input
          onChange={handleChange}
          value={note.title}
          type="text"
          name='title'
          maxLength="34" />
        <span> What generated this feeling ?</span>

        <textarea
          onChange={handleChange}
          name="description"
          value={note.description}
          cols="30"
          rows="10" />
        <button onClick={handleClick} disabled={disableBtn}>Send</button>
      </form>
    </div>
  )
}

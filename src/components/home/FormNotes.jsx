import React, { useContext, useEffect, useState } from 'react'
import postContext from '../../context/homeFeelings/postsContext'
import { IoClose } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';
import { useHandleChange } from '../../hooks/useHandleChange';
import useLocalStorage from '../../hooks/useLocalStorage';

const INITIAL_STATE_NOTE = {
  id: uuidv4(),
  title: '',
  description: '',
  date: new Date(),
  feeling: 'Happiness',
}
export default function FormNotes({ feelings }) {
  const {
    notes,
    noteCNW,
    setNotes,
    VISIBLEFORM,
    editedNote,
    setEditedNote,
    handleKeyPressVisibiliity,
    handleClickVisibility
  } = useContext(postContext)
  const [note, setNote, handleChange] = useHandleChange(INITIAL_STATE_NOTE)
  const [disableBtn, setdisableBtn] = useState(true)
  const noteToEdit = notes.find(note => note.id === noteCNW.id)
  const { setItem, getItem } = useLocalStorage()


  useEffect(() => {
    if (note.title !== '' || note.description !== '') {
      setdisableBtn(false)
    } else {
      setdisableBtn(true)
    }
  }, [note.title, note.description])

  useEffect(() => {
    if (editedNote.status) {
      setNote(noteToEdit)
    }
  }, [editedNote])

  const setNotesToProviderState = (payload) => {
    setNotes(payload)
  }
  const setNotesToLocalStorage = (payload) => {
    setItem('notes', payload)
  }


  const handleClick = (e) => {
    e.preventDefault()
    if (editedNote.status) {
      const newNotes = notes.filter(note => note.id !== noteToEdit.id)
      setNotesToProviderState([...newNotes, note])
      setNotesToLocalStorage([...newNotes, note])
    } else {
      setNotesToProviderState([...notes, note])
      setNotesToLocalStorage([...notes, note])
    }
    setNote({ ...INITIAL_STATE_NOTE, id: uuidv4() })
    setEditedNote({ note: [], status: false })
  }
  return (
    <main className={editedNote.status ? 'editFormNote-container' : 'formNote-container'}>
      <form>
        <div
          className='closeForm-btn'
          onClick={() => handleClickVisibility(VISIBLEFORM)}
          onKeyDown={(e) => handleKeyPressVisibiliity(e, VISIBLEFORM)}
        >
          <IoClose />
        </div>
        <select onChange={ handleChange} value={note.feeling} name='feeling' id='fellings'>
          {feelings.map(({ title, id }) => (<option key={id} value={title}>{title}</option>))}
        </select>
        <span> Title</span>
        <input
          onChange={handleChange}
          value={note.title}
          type='text'
          name='title'
          maxLength='34' />
        <span> What generated this feeling ?</span>

        <textarea
          onChange={handleChange}
          name='description'
          value={note.description}
          cols='30'
          rows='10' />
        <button
          onClick={handleClick}
          disabled={disableBtn}>
          {editedNote.status ? 'Edit' : 'Send'}</button>
      </form>
    </main>
  )
}

import React, { useContext } from 'react'
import postContext from '../../context/postsContext'
import { BiEdit } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import {darkModeContext} from '../../context/darkModeContext'

export default function CardNoteWindow() {
  const {
    notes,
    setNotes,
    noteCNW,
    dateFormated,
    VISIBLECARD,
    VISIBLEFORM,
    handleKeyPressVisibiliity,
    handleClickVisibility,
    setEditedNote } = useContext(postContext)
    const {isDarkMode}=useContext(darkModeContext)
  const { title, description, feeling, date } = noteCNW

  const handleClickClosebtn = () => {
    handleClickVisibility(VISIBLECARD)
    setEditedNote({ status: false, note: [] })

  }
  const handleClickEditbtn = () => {
    handleClickVisibility(VISIBLEFORM)
    setEditedNote({ status: true, note: noteCNW })
  }
  const handleClickRemovebtn = () => {
    const notesFiltred = notes.filter(note => note.id !== noteCNW.id)
    setNotes(notesFiltred)
    handleClickVisibility()
  }
  return (
    <main className={isDarkMode?`CardNoteWindow darkMode-CNW ${feeling}-container`:`CardNoteWindow ${feeling}-container`}>
      <section className='cnw-header'>
        <h1>{title}</h1>
        <div
          className='cnw-header-closebtn'
          onClick={handleClickClosebtn}
          tabIndex='0'
          onKeyDown={(e) => handleKeyPressVisibiliity(e, VISIBLECARD)}>
          < IoClose />
        </div>
      </section>
      <hr />
      <section className='cnw-body'>
        <div className='left-cnw-body'>
          <span>{feeling}</span>
          <span>{dateFormated(date)}</span>
          <div className='cnw-settings'>
            <button
              type='button'
              onClick={handleClickRemovebtn}>
              <BsTrash />
            </button>
            <button
              type='button'
              onClick={handleClickEditbtn}>
              <BiEdit /></button>
          </div>
        </div>
        <hr />
        <div className='right-cnw-body'>
          <section>{description}</section>
        </div>
      </section>
    </main>
  )
}

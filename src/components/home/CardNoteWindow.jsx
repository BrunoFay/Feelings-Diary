import React, { useContext } from 'react'
import postContext from '../../context/postsContext'
import { BiEdit } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'

export default function CardNoteWindow() {

  const {
    noteCNW,
    dateFormated,
    VISIBLECARD,
    VISIBLEFORM,
    handleKeyPressVisibiliity,
    handleClickVisibility,
    setEditedNote } = useContext(postContext)
  const { title, description, feeling, date } = noteCNW

  const handleClickClosebtn = () => {
    handleClickVisibility(VISIBLECARD)
    setEditedNote({ status: false, note: [] })

  }
  const handleClickEditbtn = () => {
    handleClickVisibility(VISIBLEFORM)
    setEditedNote({ status: true, note: noteCNW })
  }

  return (
    <main className={`CardNoteWindow ${feeling}-container`}>
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
            <button type='button'><BsTrash /></button>
            <button type='button' onClick={handleClickEditbtn}><BiEdit /></button>
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

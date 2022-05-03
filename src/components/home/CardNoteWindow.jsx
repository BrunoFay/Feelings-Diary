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
    handleKeyPressVisibiliity,
    handleClickVisibility } = useContext(postContext)
  const { title, description, feeling, date } = noteCNW
  const handleClick = () => {
    console.log('click');
    handleClickVisibility(VISIBLECARD)
  }

  return (
    <main className={`CardNoteWindow ${feeling}-container`}>
      <section className='cnw-header'>
        <h1>{title}</h1>
        <div
          onClick={handleClick}
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
            <button><BsTrash /></button>
            <button><BiEdit /></button>
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

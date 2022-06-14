import React, { useContext } from 'react'
import postContext from '../../context/homeFeelings/postsContext'

export default function NoteContainer({ note }) {
  const { title, description, feeling, date } = note
  const {
    handleClickVisibility,
    handleKeyPressVisibiliity,
    VISIBLECARD,
    setNoteCNW,
    dateFormated } = useContext(postContext)

  const handleClick = () => {
    setNoteCNW(note)
    handleClickVisibility(VISIBLECARD)
  }
  const handleKeyPress = (e) => {
    setNoteCNW(note)
    handleKeyPressVisibiliity(e, VISIBLECARD)
  }
  return (
    <article
      className={`carousel-item ${feeling}-container`}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      tabIndex='0'
    >
      <h3>{title}</h3>
      <div>
        <span>{feeling}</span>
        <hr />
      </div>
      <p>{description}</p>
      <span>{dateFormated(date)}</span>
    </article>
  )
}

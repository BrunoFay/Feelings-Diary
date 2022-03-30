import React, { useContext } from 'react'
import postContext from '../../context/postsContext'

export default function CardNoteWindow() {
  const { noteCNW, dateFormated } = useContext(postContext)
  const { title, description, feeling, date } = noteCNW
  console.log(noteCNW);
  return (
    <main className={`CardNoteWindow ${feeling}-container`}>
      <section className='cnw-header'>
        <h1>{title}</h1>
        <span>X</span>
      </section>
      <hr />
      <section className='cnw-body'>
        <div className='left-cnw-body'>
          <span>{feeling}</span>
          <span>{dateFormated(date)}</span>
          <div className='cnw-settings'>
            <span>remove</span>
            <span>edit</span>
          </div>
        </div>
        <hr />

        <div className='right-cnw-body'>
          <p>{description}</p>
        </div>
      </section>
    </main>
  )
}

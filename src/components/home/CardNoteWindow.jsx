import React from 'react'

export default function CardNoteWindow() {
  /* ${note.feeling} */
  return (
    <div className={`CardNoteWindow -container`}>
        <h1>My Notes</h1>
      <div className='cnw-infos-btn '>
        <span>felling</span>
        <span>data</span>
        <div>
          <span>remove</span>
          <span>edit</span>
        </div>
      </div>
      <div className='cnw-describe'>
        <p>dasdaskdoasokdaoskdoaksdokaoskd</p>
      </div>
      <div className='cnw-close-btn'>

      </div>
    </div>
  )
}

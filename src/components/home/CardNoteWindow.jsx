import React from 'react'

export default function CardNoteWindow() {
  /* ${note.feeling} */
  return (
    <div className={`CardNoteWindow -container`}>
      <div className='cnw-infos-btn '>
        <h1>My Notes</h1>
        <span>felling</span>
        <span>data</span>
        <div>
          <span></span>
          <span></span>
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

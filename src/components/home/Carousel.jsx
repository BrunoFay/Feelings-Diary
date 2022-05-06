import React, { useRef, useContext } from 'react'
import NoteContainer from './NoteContainer';
import postContext from '../../context/postsContext';
import useDragScroll from '../../hooks/useDragScroll';

export default function Carousel() {
  const { notes, notesFiltred } = useContext(postContext)
  const carouselRef = useRef(null)
  const { onMouseDown } = useDragScroll(carouselRef, { direction: 'horizontal' });
  if (notesFiltred.length) {
    return (
      <div
        ref={carouselRef}
        className='carousel'
        onMouseDown={onMouseDown}
        onKeyDown={onMouseDown}
        tabIndex='0'
      >
        {notesFiltred.map((note) => (<NoteContainer key={note.id} note={note} />))}
      </div>
    )
  }
  return (
    <div
      ref={carouselRef}
      className='carousel'
      onMouseDown={onMouseDown}
      onKeyDown={onMouseDown}
      tabIndex='0'
    >
      {notes.map((note) => (<NoteContainer key={note.id} note={note} />))}
    </div>
  )
}
import React, { useRef, useContext, useSta, useRefte } from 'react'
import NoteContainer from './NoteContainer';
import postContext from '../../context/postsContext';
import useDragScroll from '../../hooks/useDragScroll';

export default function Carousel() {
  const { notes } = useContext(postContext)
  const carouselRef = useRef(null)
  const { onMouseDown } = useDragScroll(carouselRef, { direction: 'horizontal' });

  return (
    <div
      ref={carouselRef}
      className='carousel'
      onMouseDown={onMouseDown}
    >
      {notes.map((note) => (<NoteContainer key={note.id} note={note} />))}
    </div>
  )
}
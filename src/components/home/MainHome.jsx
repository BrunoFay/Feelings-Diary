import React, { useContext, useState } from 'react'
import './mainHome.css'
import DaysWeekMonthComponent from './DaysWeekMonthComponent'
import FormNotes from './FormNotes'
import { AiOutlinePlus } from 'react-icons/ai';
import FeelingContainer from './FeelingContainer';
import Carousel from './Carousel';
import CardNoteWindow from './CardNoteWindow';
import postContext from '../../context/postsContext';

const ARRAY_FEELINGS = [{ title: 'Happiness' }, { title: 'Sadness' },
{ title: 'Anger' }, { title: 'Fear' }, { title: 'Neutral' }]

const INITIAL_STATE_EDITEDNOTE = {
  status: false,
  note: [],
}

export default function MainHome() {
  const { visible, setVisible } = useContext(postContext)
  const [editedNote, setEditedNote] = useState(INITIAL_STATE_EDITEDNOTE)

  const handleClick = (name) => {
    setVisible(!visible[name])
  };
  return (
    <div className='home-container'>
      <h1>Feelings</h1>
      <DaysWeekMonthComponent />
      <section className='feelings-container'>
        {ARRAY_FEELINGS
          .map(({ title }) => (
            <FeelingContainer key={title} title={title} />)
          )}
      </section>
      <h1>My Notes</h1>
      <DaysWeekMonthComponent />
      <section className='notes-container'>
        {visible.visibleForm ? (
          <FormNotes
            feelings={ARRAY_FEELINGS}
            closeFormFunc={handleClick}
            editedNote={[editedNote, setEditedNote]}
          />
        ) : null}
        <Carousel />
        {visible.visibleCard ? (<CardNoteWindow />) : null}
        <div className='new-post' onClick={handleClick}>
          <AiOutlinePlus />
        </div>
      </section>
    </div>
  )
}

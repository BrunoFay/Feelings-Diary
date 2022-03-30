import React, { useContext, useState } from 'react'
import './mainHome.css'
import DaysWeekMonthComponent from './DaysWeekMonthComponent'
import FormNotes from './FormNotes'
import { AiOutlinePlus } from 'react-icons/ai';
import FeelingContainer from './FeelingContainer';
import Carousel from './Carousel';


const ARRAY_FEELINGS = [{ title: 'Happiness' }, { title: 'Sadness' },
{ title: 'Anger' }, { title: 'Fear' }, { title: 'Neutral' }]


export default function MainHome() {
  const [visibleForm, setVisibleForm] = useState(false)
  const [editedNote, setEditedNote] = useState(false)
  const handleClick = () => {
    setVisibleForm(!visibleForm)
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
        {visibleForm ? (
          <FormNotes feelings={ARRAY_FEELINGS} closeFormFunc={handleClick} />
        ) : null}
        <Carousel />
        <div className='new-post' onClick={handleClick}>
          <AiOutlinePlus />
        </div>
      </section>
    </div>
  )
}

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


export default function MainHome() {
  const { isVisible, handleClickVisibility, VISIBLEFORM } = useContext(postContext)
  return (
    <main className='home-container'>
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
        {isVisible.visibleForm ? (
          <FormNotes feelings={ARRAY_FEELINGS} />
        ) : null}
        <Carousel />
        {isVisible.visibleCard ? (<CardNoteWindow />) : null}
        <button className='new-post' onClick={() => handleClickVisibility(VISIBLEFORM)}>
          <AiOutlinePlus />
        </button>
      </section>
    </main>
  )
}

import React, { useContext, useState } from 'react'
import './mainHome.css'
import DaysWeekMonthComponent from './DaysWeekMonthComponent'
import FormNotes from './FormNotes'
import { AiOutlinePlus } from 'react-icons/ai';
import FeelingPercentageContainer from './FeelingPercentageContainer';
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
            <FeelingPercentageContainer key={title} title={title} />)
          )}
      </section>
      <h1>My Notes</h1>
      <DaysWeekMonthComponent />
      <section className='notes-container'>
        {isVisible.visibleForm && (<FormNotes feelings={ARRAY_FEELINGS} />)}
        <Carousel />
        {isVisible.visibleCard && (<CardNoteWindow />) }
        <button className='new-post' onClick={() => handleClickVisibility(VISIBLEFORM)}>
          <AiOutlinePlus />
        </button>
      </section>
    </main>
  )
}

import React, { useState } from 'react'
import './mainHome.css'
import DaysWeekMonthComponent from './DaysWeekMonthComponent'
import FormNotes from './FormNotes'
import { AiOutlinePlus } from 'react-icons/ai';
import FeelingContainer from './FeelingContainer';

const ARRAY_FEELINGS = [{ title: 'Happiness', icon: '😀' }, { title: 'Sadness', icon: '😢' },
{ title: 'Anger', icon: '😡' }, { title: 'Fear', icon: '😱' },{ title: 'Neutral', icon: '😐' }]


export default function MainHome() {
  const [visibleForm, setVisibleForm] = useState(false)
 

  const handleClick = () => {
    setVisibleForm(!visibleForm)
  };

  const array = [1, 1, 2]
  const calculatePercentage = (array, item) => {
    const total = array.length
    const percentage = (array.filter(i => i === item).length / total) * 100
    return percentage
  }
  console.log(Math.round(calculatePercentage(array, 2)));

  return (
    <div className='home-container'>
      <h1>Feelings</h1>
      <DaysWeekMonthComponent />
      <section className='feelings-container'>
        {ARRAY_FEELINGS.map(({ title }) => (<FeelingContainer title={title} />))}
      </section>
      <h1>My Notes</h1>
      <DaysWeekMonthComponent />
      <section className='notes-container'>
        {visibleForm ? <FormNotes /> : null}
        <section className='carousel-posts'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </section>
        <div className='new-post' onClick={handleClick}>
          <AiOutlinePlus />
        </div>
      </section>
    </div>
  )
}

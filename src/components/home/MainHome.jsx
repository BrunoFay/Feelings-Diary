import React, { useState } from 'react'
import './mainHome.css'
import DaysWeekMonthComponent from './DaysWeekMonthComponent'
import FormNotes from './FormNotes'
import { AiOutlinePlus } from 'react-icons/ai';   

export default function MainHome() {

  const [visibleForm, setVisibleForm] = useState(false)
  const handleClick = () => {
    setVisibleForm(!visibleForm)
  };

  return (
    <div className='home-container'>
      <h1>Feelings</h1>
      <DaysWeekMonthComponent />
      <section className='feelings-container'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
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
          <AiOutlinePlus/>
        </div>
      </section>
    </div>
  )
}

import React from 'react'
import './mainHome.css'

export default function MainHome() {
  return (
    <div className='home-container'>
      <h1>Feelings</h1>
      <nav>
        <span>Todays</span>
        <span>This Week</span>
        <span>This Month</span>
      </nav>
      <section className='feelings-container'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </section>
      <h1>My Notes</h1>
      <nav>
        <span>Todays</span>
        <span>This Week</span>
        <span>This Month</span>
      </nav>
      <section className='notes-container'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </section>
    </div>
  )
}

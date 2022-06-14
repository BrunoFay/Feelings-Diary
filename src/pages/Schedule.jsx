import React, { useState } from 'react'
import Calendar from 'react-calendar';
import Navbar from '../components/navbar/Navbar';
import PageContainer from '../components/Page-container';
import '../components/schedule/schedule.css';
import 'react-calendar/dist/Calendar.css';

export default function Schedule() {
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  function handleDateCalendar(newDate) {
    setDate(newDate);
    openModal();
    console.log(newDate);
  }
  return (
    <>
      <Navbar />
      <main className="main-container">
        <PageContainer>
          <h1>Schedule</h1>
          <div className='calendar-container'>
            <Calendar onChange={handleDateCalendar} value={date} />
          </div>
          {isModalOpen && (
            <div className='modal-container'>
            <h2>Mark on calendar</h2>
            <form action="" className='modal-form'>
            <select>
              <option value="">Events</option>
              <option value="">birthdays</option>
              <option value="">ss</option>
            </select>
            <textarea name="" id="" cols="45" rows="10" />
          <button type='submit'>Mark</button>
            </form>
            </div>
          )}

        </PageContainer>
      </main>
    </>
  )
}

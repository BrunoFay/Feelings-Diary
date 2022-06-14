import React, { useState } from 'react'
import Calendar from 'react-calendar';
import Navbar from '../components/navbar/Navbar';
import PageContainer from '../components/Page-container';
import '../components/schedule/schedule.css';
import 'react-calendar/dist/Calendar.css';
import NewMarkModal from '../components/schedule/NewMarkModal';

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
            <NewMarkModal/>
          )}

        </PageContainer>
      </main>
    </>
  )
}

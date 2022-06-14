import React, { useState } from 'react'
import Calendar from 'react-calendar';
import Navbar from '../components/navbar/Navbar';
import PageContainer from '../components/Page-container';
import '../components/schedule/schedule.css';
import 'react-calendar/dist/Calendar.css';
import NewMarkModal from '../components/schedule/NewMarkModal';
import { useContext } from 'react';
import { scheduleContext } from '../context/schedule/scheduleContext';

export default function Schedule() {
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { schedule } = useContext(scheduleContext)
  function openModal() {
    setIsModalOpen(true);
  }
  function handleDateCalendar(newDate) {
    setDate(newDate);
    openModal();
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
          <div className='schedules-continer'>
            {schedule.map(({scheduleType,description,scheduleDate})=>(
            <div>
            <span>{scheduleType}</span>
            <span>{description}</span>
            <span>{scheduleDate}</span>
            </div>
            ))}
          </div>
          {isModalOpen && (
            <NewMarkModal date={date} />
          )}

        </PageContainer>
      </main>
    </>
  )
}

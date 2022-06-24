import React, { useState, useRef } from 'react'
import Calendar from 'react-calendar';
import Navbar from '../components/navbar/Navbar';
import PageContainer from '../components/Page-container';
import '../components/schedule/schedule.css';
import 'react-calendar/dist/Calendar.css';
import NewMarkModal from '../components/schedule/NewMarkModal';
import { useContext } from 'react';
import { scheduleContext } from '../context/schedule/scheduleContext';
import useDragScroll from '../hooks/useDragScroll';

export default function Schedule() {
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { schedule } = useContext(scheduleContext)
  const carouselRef = useRef(null)
  const { onMouseDown } = useDragScroll(carouselRef, { direction: 'horizontal' });
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
          <di>
            <div className='carousel-container' >
              <div
                ref={carouselRef}
                className='carousel schedules-continer'
                onMouseDown={onMouseDown}
                onKeyDown={onMouseDown}
                tabIndex='0'
              >
                {schedule.map(({ scheduleType, description, scheduleDate }) => (
                  <div className={`carousel-item ${scheduleType}-container`}>
                    <span>{scheduleType}</span>
                    <span>{description}</span>
                    <span>{scheduleDate}</span>
                  </div>
                ))}
              </div>
            </div>
          </di>
          {isModalOpen && (
            <NewMarkModal date={date} />
          )}

        </PageContainer>
      </main>
    </>
  )
}

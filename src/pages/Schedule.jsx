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
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Schedule() {
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { schedule: scheduleFromContext } = useContext(scheduleContext)
  const [schedules, setSchedules] = useState([])
  const carouselRef = useRef(null)
  const { onMouseDown } = useDragScroll(carouselRef, { direction: 'horizontal' });
  const location = useLocation()
  function openModal() {
    setIsModalOpen(true);
  }
  function handleDateCalendar(newDate) {
    setDate(newDate);
    openModal();
  }
  function filterScheduleByPage() {
    const schedulesFiltred = (page) => {
      setSchedules(scheduleFromContext.filter(schedule => schedule.scheduleType === page))
    }
    switch (location.pathname) {
      case '/schedule/events':
        schedulesFiltred('events')
        return;
      case '/schedule/birthdays':
        schedulesFiltred('birthdays')
        return;
      case '/schedule/meetings':
        schedulesFiltred('meetings')
        return;
      default:
        setSchedules(scheduleFromContext)
        return;
    }
  }
  useEffect(() => {
    if (location.pathname === '/schedule') {
      setSchedules(scheduleFromContext)
    }
    filterScheduleByPage()
  }, [location.pathname, scheduleFromContext])
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
                {schedules.map(({ scheduleType, description, scheduleDate }) => (
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

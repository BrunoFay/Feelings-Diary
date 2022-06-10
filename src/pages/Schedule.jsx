import React, { useState } from 'react'
import Calendar from 'react-calendar';
import Navbar from '../components/navbar/Navbar';
import PageContainer from '../components/Page-container';
import '../components/schedule/schedule.css';
import 'react-calendar/dist/Calendar.css';
export default function Schedule() {
  const [value, onChange] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    console.log("open modal");
    onChange(value);
    setIsModalOpen(!isModalOpen);
  }
  console.log(value);
  return (
    <>
      <Navbar />
      <main className="main-container">
        <PageContainer>
          <h1>Schedule</h1>
          <div className='calendar-container'>
            <Calendar onChange={openModal} value={value} />
          </div>
          {isModalOpen && (
            <div className='modal-container'>
            <h1>hello</h1>
            </div>
          )}

        </PageContainer>
      </main>
    </>
  )
}

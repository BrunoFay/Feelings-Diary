import React from 'react'
import Navbar from '../components/navbar/Navbar';
import PageContainer from '../components/Page-container';
import '../components/schedule/schedule.css';

export default function Schedule() {
  function countNumberOFdaysInCurrentMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const daysOfCurrentMounth = countNumberOFdaysInCurrentMonth(currentYear, currentMonth + 1)
  const daysArray = Array.from({ length: daysOfCurrentMounth }, (v, i) => i)
  const nameDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  return (
    <>
      <Navbar />
      <main className="main-container">
        <PageContainer>
          <h1>Schedule</h1>
          <div className="schedule-container">
            <div className='dayName-container'>
              {nameDays.map((nameDay, index) => (<span >{nameDay}</span>))}
            </div>
            <div className='days-container'>
            {daysArray.map((day, i) => (<div className='day-container'>{i + 1}</div>))}
            </div>
          </div>
        </PageContainer>
      </main>
    </>
  )
}

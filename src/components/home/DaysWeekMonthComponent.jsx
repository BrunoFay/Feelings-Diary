import React, { useContext } from 'react'
import postsContext from '../../context/postsContext'

export default function DaysWeekMonthComponent() {
  const { notes, setNotesFiltred } = useContext(postsContext)
  const noteWithDateFormated = notes.map((notes) => ({ ...notes, date: notes.date.toISOString().slice(0, 10) }))
  const currentDate = new Date;
  const filterByWeek = () => {
    const firstdayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
    const lastDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6));
    const firstDayOfWeekFormated = firstdayOfWeek.toISOString().slice(0, 10)
    const lastDayOfWeekFormated = lastDayOfWeek.toISOString().slice(0, 10)

    const notesWeek = noteWithDateFormated.filter((note) => (note.date >= firstDayOfWeekFormated && note.date <= lastDayOfWeekFormated))
    setNotesFiltred(notesWeek)
  }
  const filterByMonth = () => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const firstDayOfMonthFormated = firstDayOfMonth.toISOString().slice(0, 10)
    const lastDayOfMonthFormated = lastDayOfMonth.toISOString().slice(0, 10)
    const notesMonth = noteWithDateFormated.filter((note) => (note.date >= firstDayOfMonthFormated && note.date <= lastDayOfMonthFormated))
    setNotesFiltred(notesMonth)
  }
  const filterByDay = () => {
    const notesDay = noteWithDateFormated.filter((note) => (note.date === currentDate.toISOString().slice(0, 10)))
    setNotesFiltred(notesDay)
  }
  return (
    <nav>
      <button
        type='button'
        onClick={filterByDay}
        className='DWM-Components'>
        Todays
      </button>
      <button
        type='button'
        onClick={filterByWeek}
        className='DWM-Components'>
        This Week
      </button>
      <button
        type='button'
        onClick={filterByMonth}
        className='DWM-Components'>
        This Month
      </button>
    </nav>
  )
}
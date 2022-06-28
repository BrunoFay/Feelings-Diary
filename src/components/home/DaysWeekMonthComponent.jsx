import React, { useContext } from 'react'
import { darkModeContext } from '../../context/darkmode/darkModeContext'
import postsContext from '../../context/homeFeelings/postsContext'

export default function DaysWeekMonthComponent() {
  const { notes, setNotesFiltred } = useContext(postsContext)
  const { isDarkMode } = useContext(darkModeContext)
  const formatDateToYYYYMMDD = (date) => {
    return date.toString().slice(0, 10)
  }
  const noteWithDateFormated = notes
    .map((notes) => ({ ...notes, date: formatDateToYYYYMMDD(notes.date) }))
  const currentDate = new Date;
  const convertDateToValidFormat = (date) => {
    const dateFormated = new Date(date)
    return dateFormated
  }
  const convertObjectsToValidFormat = (notesFiltred) => {
    const noteValidFormat = 
      notesFiltred.map((note) => ({ ...note, date: convertDateToValidFormat(note.date) }))
    return noteValidFormat
  }
  const filterByWeek = () => {
    const firstdayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
    const lastDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6));
    const firstDayOfWeekFormated = formatDateToYYYYMMDD(firstdayOfWeek)
    const lastDayOfWeekFormated = formatDateToYYYYMMDD(lastDayOfWeek)
    const notesWeek = noteWithDateFormated
      .filter((note) => (note.date >= firstDayOfWeekFormated && note.date <= lastDayOfWeekFormated))
    const notesWeekFormated = convertObjectsToValidFormat(notesWeek)
    setNotesFiltred(notesWeekFormated)
  }

  const filterByMonth = () => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const firstDayOfMonthFormated = formatDateToYYYYMMDD(firstDayOfMonth)
    const lastDayOfMonthFormated = formatDateToYYYYMMDD(lastDayOfMonth)
    const notesMonth = noteWithDateFormated.filter((note) => (note.date >= firstDayOfMonthFormated && note.date <= lastDayOfMonthFormated))
    const notesMonthFormated = convertObjectsToValidFormat(notesMonth)
    setNotesFiltred(notesMonthFormated)
  }

  const filterByDay = () => {
    const notesDay = noteWithDateFormated.filter((note) => (note.date === currentDate.toISOString().slice(0, 10)))
    const notesDayFormated = convertObjectsToValidFormat(notesDay)
    setNotesFiltred(notesDayFormated)
  }
  return (
    <nav className={isDarkMode ? 'darkMode-navFilters' : null}>
      <button
        type='button'
        onClick={() => setNotesFiltred([])}
        className='DWM-Components'>
        All
      </button>
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
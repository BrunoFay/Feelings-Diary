import postContext from "./postsContext";
import React, { useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';


const MAX_PORCENTAGE = 100;
const MIN_PORCENTAGE = 0;
const INITIAL_STATE_VISIBLE = { visibleForm: false, visibleCard: false, }
const INITIAL_STATE_EDITEDNOTE = {
  status: false,
  note: [],
}
export default function PostContextProvider({ children }) {
  const VISIBLECARD = 'visibleCard';
  const VISIBLEFORM = 'visibleForm';
  const [notes, setNotes] = useState([])
  const [notesFiltred, setNotesFiltred] = useState([])
  const [noteCNW, setNoteCNW] = useState({})
  const [isVisible, setIsVisible] = useState(INITIAL_STATE_VISIBLE)
  const [editedNote, setEditedNote] = useState(INITIAL_STATE_EDITEDNOTE)
  const { setItem, getItem } = useLocalStorage()

  useEffect(() => {
    const notesLocalStorage = getItem('notes')
    setNotes(notesLocalStorage)
  }, [])

  const percentageArray = (notes) => notes.map(({ feeling }) => feeling)
  const calculatePercentage = (array, item) => {
    const total = array.length
    const percentage = (array.filter(i => i === item).length / total) * MAX_PORCENTAGE
    const roundedPercentage = Math.round(percentage)
    return roundedPercentage || MIN_PORCENTAGE
  }
  const dateFormated = (date) => {
    const day = new Date(date).getDate()
    const month = new Date(date).toLocaleString('default', { month: 'long' })
    return (`${day} ${month}`)
  }

  const handleClickVisibility = (name) => {
    setIsVisible({ [name]: !isVisible[name] })
  };
  const handleKeyPressVisibiliity = (e, name) => {
    if (e.key === 'Enter') {
      handleClickVisibility(name)
    }
  }
  const contextValue = {
    notes,
    setNotes,
    notesFiltred,
    setNotesFiltred,
    noteCNW,
    setNoteCNW,
    percentageArray,
    calculatePercentage,
    handleClickVisibility,
    handleKeyPressVisibiliity,
    dateFormated,
    isVisible,
    setIsVisible,
    VISIBLECARD,
    VISIBLEFORM,
    editedNote,
    setEditedNote,
  }
  return (
    <postContext.Provider value={contextValue}>
      {children}
    </postContext.Provider>
  )
}

import React, { useContext } from 'react';
import { darkModeContext } from '../../context/darkModeContext';
import postContext from '../../context/postsContext';

export default function FeelingContainer({ title }) {
  const {
    percentageArray,
    calculatePercentage,
    notesFiltred,
    notes } = useContext(postContext)
  const { isDarkMode } = useContext(darkModeContext)
  const arrayAll = percentageArray(notes)
  const arrayFiltred = percentageArray(notesFiltred)
  return (
    <div className={isDarkMode ? 'div-feeling darkMode-fel-percent-names' : 'div-feeling'}>
      <div className={`${title}-container`}>
        <span >{`${notesFiltred.length ?
          calculatePercentage(arrayFiltred, title)
          : calculatePercentage(arrayAll, title)}%`}</span>
      </div>
      <span>{title}</span>
    </div>
  )
}

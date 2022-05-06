import React, { useContext } from 'react'
import postContext from '../../context/postsContext';

export default function FeelingContainer({ title }) {
  const {
    percentageArray,
    calculatePercentage,
    notesFiltred,
    notes } = useContext(postContext)
  const arrayAll = percentageArray(notes)
  const arrayFiltred = percentageArray(notesFiltred)
  return (
    <div className='div-feeling'>
      <div className={`${title}-container`}>
        <span>{`${notesFiltred.length ?
          calculatePercentage(arrayFiltred, title)
          : calculatePercentage(arrayAll, title)}%`}</span>
      </div>
      <span>{title}</span>
    </div>
  )
}

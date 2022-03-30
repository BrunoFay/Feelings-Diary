import React, { useContext } from 'react'
import postContext from '../../context/postsContext';

export default function FeelingContainer({ title }) {
  const { percentageArray, calculatePercentage } = useContext(postContext)
  return (
    <div className='div-feeling'>
      <div className={`${title}-container`}>
        <span>{`${calculatePercentage(percentageArray, title)}%`}</span>
      </div>
      <span>{title}</span>
    </div>
  )
}

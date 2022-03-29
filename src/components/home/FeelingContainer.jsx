import React from 'react'

export default function FeelingContainer({title}) {
  return (
  <div className='div-feeling'>
    <div className={`${title}-container`}>
    <span>porcentagem</span>
    </div>
    <span>{title}</span>
  </div>
  )
}

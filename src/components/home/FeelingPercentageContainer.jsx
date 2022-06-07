import React, { useContext } from 'react';
import { darkModeContext } from '../../context/darkModeContext';
import postContext from '../../context/postsContext';
import { CircularProgressbar } from 'react-circular-progressbar';

export default function FeelingContainer({ title }) {
  const {
    percentageArray,
    calculatePercentage,
    notesFiltred,
    notes } = useContext(postContext)
  const { isDarkMode } = useContext(darkModeContext)
  const arrayAll = percentageArray(notes)
  const arrayFiltred = percentageArray(notesFiltred)
  function setFeelingColorPercentage(title) {
    const colors = {
      Happiness: '--bgcolorHap',
      Sadness: '--bgcolorSad',
      Anger: '--bgcolorAng',
      Fear: '--bgcolorFer',
      Neutral: '--bgcolorNeu'
    }
    return colors[title]
  }
  const percentage = notesFiltred.length ? calculatePercentage(arrayFiltred, title) : calculatePercentage(arrayAll, title)
  const setTspanPosition = percentage > 10 ? -13 : -7
  return (
    <div className={isDarkMode ? 'div-feeling darkMode-fel-percent-names' : 'div-feeling'}>
      <CircularProgressbar
        value={percentage}
        text={<tspan dx={setTspanPosition} >{percentage}%</tspan>}
        styles={{
          path: {
            stroke: `var(${setFeelingColorPercentage(title)})`,
            strokeLinecap: 'butt',
            transition: 'stroke-dashoffset 0.5s ease 0s',
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          trail: {
            stroke: `${!isDarkMode ?'#d6d6d6':'#a0a0a0'}`,
            strokeLinecap: 'butt',
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          text: {
            fill: `${!isDarkMode ? 'black' : 'var(--colorTitleAndPercentage)'}`,
            fontSize: '16px',
          },
        }}
      />
      <span>{title}</span>
    </div>
  )
}

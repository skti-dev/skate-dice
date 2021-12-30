import React from "react"

const TrickList = ({ selectedStance, selectedDirection, selectedSpin, selectedTrick, tries, currentStatus, handleYesClick, handleNoClick }) => {
  return (
    <ul className="trick-list">
      <li>Base: <span>{selectedStance}</span> </li>
      <li>Direção: <span>{selectedDirection}</span> </li>
      <li>Giro: <span>{selectedSpin}</span> </li>
      <li>Manobra: <span>{selectedTrick}</span> </li>
      <li>Tentativas: <span>{tries}</span> </li>
      <hr />
      <li>Acertou? 
        <span onClick={handleYesClick} className={`status-icon ${currentStatus == 'y' ? 'green' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <span onClick={handleNoClick} className={`status-icon ${currentStatus == 'n' ? 'red' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span> 
      </li>
    </ul>
  )
}

export default TrickList

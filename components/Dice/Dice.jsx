import React, { useState, useEffect } from "react"

import History from "../History/History"
import Button from "../Button/Button"

import allData from "../../data/dummyData"

const Dice = () => {
  const [stances, setStances] = useState([])
  const [directions, setDirections] = useState([])
  const [spins, setSpins] = useState([])
  const [tricks, setTricks] = useState([])
  
  useEffect(() => {
    const loadData = () => {
      try {
        if(tricks.length) return true
        const { allStances, allDirections, allSpins, allTricks } = allData
        setStances(allStances)
        setDirections(allDirections)
        setSpins(allSpins)
        setTricks(allTricks)
      }catch(e) {
        console.error("Error while loading data")
        console.error(e)
      }
    }
    loadData()
  })

  const [hasFinalTrick, setHasFinalTrick] = useState(false)
  const [selectedStance, setSelectedStance] = useState("")
  const [selectedDirection, setSelectedDirection] = useState("")
  const [selectedSpin, setSelectedSpin] = useState("")
  const [selectedTrick, setSelectedTrick] = useState("")
  const [tries, setTries] = useState(0)
  const [currentStatus, setCurrentStatus] = useState('')

  const selectRandomValueFromArr = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
  } 

  const [hasHistory, setHasHistory] = useState(false)
  const [history] = useState([])

  const sortTrick = () => {
    try {
      const yourChoiceText = "Você decide!"

      const randomTrick = selectRandomValueFromArr(tricks)
      const { hasDirections, spinnable, name } = randomTrick

      const randomStance = selectRandomValueFromArr(stances)
      const randomDirection = selectRandomValueFromArr(directions)
      const randomSpin = selectRandomValueFromArr(spins)

      setSelectedStance(randomStance ? randomStance : yourChoiceText)
      setSelectedDirection(!hasDirections ? "---" : randomDirection ? randomDirection : yourChoiceText)
      setSelectedSpin(!spinnable ? "---" : randomSpin ? randomSpin : yourChoiceText)
      setSelectedTrick(name ? name : yourChoiceText)
      setTries(Math.floor(Math.random() * 5) + 1)
      setCurrentStatus('')
      
      if(hasHistory) history.push({ selectedStance, selectedDirection, selectedSpin, selectedTrick, tries, currentStatus })
      if(!hasHistory) setHasHistory(true)

      if(!hasFinalTrick) setHasFinalTrick(true)
    }catch(e) {
      console.error("An error has occured while sorting a new trick")
      console.error(e)
      setHasFinalTrick(false)
    }
  }

  return (
    <div className="content">
      <Button handleClick={sortTrick}>Sortear Manobra!</Button>
      {
        hasFinalTrick && (
          <>
            <ul className="trick-list">
              <li>Base: <span>{selectedStance}</span> </li>
              <li>Direção: <span>{selectedDirection}</span> </li>
              <li>Giro: <span>{selectedSpin}</span> </li>
              <li>Manobra: <span>{selectedTrick}</span> </li>
              <li>Tentativas: <span>{tries}</span> </li>
              <hr />
              <li>Acertou? 
                <span onClick={() => { setCurrentStatus('y') }} className={`status-icon ${currentStatus == 'y' ? 'green' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span onClick={() => { setCurrentStatus('n') }} className={`status-icon ${currentStatus == 'n' ? 'red' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span> 
              </li>
            </ul>
          </>
        )
      }
      <History history={history}  />
    </div>
  )
}

export default Dice

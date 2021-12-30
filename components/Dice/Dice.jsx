import React, { useState } from "react"

import History from "../History/History"

const Dice = () => {
  const [stances] = useState(["Regular", "Switch", "Fakie", "Nollie", false])
  const [directions] = useState(["Backside", "Frontside", false])
  const [spins] = useState(["180", "360", false])
  const [tricks] = useState(
    [
      // Ollie
      {name: "Ollie", spinnable: true, hasDirections: true}, //  reverse: false, bodyVarial: true
      // Shove it
      {name: "BS Shove It", spinnable: true, hasDirections: false}, //  reverse: true, bodyVarial: true
      {name: "FS Shove It", spinnable: true, hasDirections: false}, //  reverse: true, bodyVarial: true
      // Flip
      {name: "Flip", spinnable: true, hasDirections: true}, //  reverse: false, bodyVarial: true
      {name: "Varial Flip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
      {name: "360 Flip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
      {name: "Hardflip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
      {name: "360 Hardflip", spinnable: false, hasDirections: false}, //  reverse: false, bodyVarial: false
      // Heelflip
      {name: "Heelflip", spinnable: true, hasDirections: true}, //  reverse: false, bodyVarial: true
      {name: "Varial Heelflip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
      {name: "Laser Flip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
      {name: "Inward Heelflip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
      {name: "360 Inward Heelflip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
      // Big Spin
      {name: "Big Spin", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
      {name: "Big Spin Flip", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
      {name: "Big Spin Heelflip", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
      // Bigger Spin
      {name: "Bigger Spin", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
      {name: "Bigger Spin Flip", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
      {name: "Bigger Spin Heelflip", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
      // Gazelle Spin
      {name: "Gazelle Spin", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
      {name: "Gazelle Spin Flip", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
      {name: "Gazelle Spin Heelflip", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
      // Pressure
      {name: "Pressure Flip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
      {name: "Pressure Hardflip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
      // Impossible
      {name: "Impossible", spinnable: false, hasDirections: false}, //  reverse: false, bodyVarial: false
      // Casper
      {name: "Casper Flip", spinnable: false, hasDirections: false}, //  reverse: false, bodyVarial: false
      {name: "Alpha Flip", spinnable: false, hasDirections: false}, //  reverse: false, bodyVarial: false
      // Dolphin
      {name: "Dolphin Flip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: false
      {name: "Dragon Flip", spinnable: false, hasDirections: false}, //  reverse: false, bodyVarial: false
      // Old School
      {name: "Old School Flip", spinnable: true, hasDirections: true}, //  reverse: false, bodyVarial: true
      {name: false, spinnable: true, hasDirections: true}
    ]
  )

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
      <div className="dice-container">
        <button onClick={sortTrick} className="dice">
          Sortear Manobra!
        </button>
      </div>
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

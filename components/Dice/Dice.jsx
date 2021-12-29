import React, { useState } from "react"

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

  const [hasError, setHasError] = useState(false)

  const selectRandomValueFromArr = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
  } 

  const [hasHistory, setHasHistory] = useState(false)
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const [history] = useState([])

  const handleClick = () => {
    setIsHistoryOpen(!isHistoryOpen)
  }

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
      
      if(hasHistory) history.push({ selectedStance, selectedDirection, selectedSpin, selectedTrick })
      if(!hasHistory) setHasHistory(true)

      if(hasError) setHasError(false)
      if(!hasFinalTrick) setHasFinalTrick(true)
    }catch(e) {
      console.error("An error has occured while sorting a new trick")
      console.error(e)
      setHasFinalTrick(false)
      setHasError(true)
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
            </ul>
            {
              history.length > 0 && (
                <>
                  <span className="open-history" onClick={() => { handleClick() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0H24V24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    {
                      !isHistoryOpen && (<span className="tooltip"> Clique para visualizar o histórico </span>)
                    }
                  </span>
                  {
                    isHistoryOpen ? (
                      <div className="history-container">
                        <div className="history-title">
                          <span className="history-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"/></svg>
                          </span>
                          <h3>Histórico</h3>
                        </div>
                        <div className="history-content">
                          <ul>
                            {
                              history.map(({ selectedStance, selectedDirection, selectedSpin, selectedTrick }, index) => {
                                return (
                                  <li key={index}>
                                    {index + 1} -
                                    Base:
                                    <span>{selectedStance}</span>
                                    Direção:
                                    <span>{selectedDirection}</span>
                                    Giro:
                                    <span>{selectedSpin}</span>
                                    Manobra:
                                    <span>{selectedTrick}</span>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    ) : null
                  }
                </>
              )
            }
          </>
        )
      }
      {
        hasError && (
          <p> Ocorreu um erro ao tentar sortear uma manobra. Por favor tente novamente.</p>
        )
      }
    </div>
  )
}

export default Dice

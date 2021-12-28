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
          <ul>
            <li>Base: <span>{selectedStance}</span> </li>
            <li>Direção: <span>{selectedDirection}</span> </li>
            <li>Giro: <span>{selectedSpin}</span> </li>
            <li>Manobra: <span>{selectedTrick}</span> </li>
          </ul>
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

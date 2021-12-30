import React, { useState, useEffect } from "react"

import History from "../History/History"
import Button from "../Button/Button"
import TrickList from "../TrickList/TrickList"

import allData from "../../data/dummyData"

const Content = () => {
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
  const [currentStatus, setCurrentStatus] = useState("")

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
      setCurrentStatus("")
      
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
      { hasFinalTrick && 
        <TrickList 
          selectedStance={selectedStance} 
          selectedDirection={selectedDirection} 
          selectedSpin={selectedSpin} 
          selectedTrick={selectedTrick}
          tries={tries}
          currentStatus={currentStatus}
          handleYesClick={() => { setCurrentStatus("y") }}
          handleNoClick={() => { setCurrentStatus("n") }}
        /> 
      }
      <History history={history}  />
    </div>
  )
}

export default Content

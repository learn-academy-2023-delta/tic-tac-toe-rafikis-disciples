import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import { click } from '@testing-library/user-event/dist/click'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  // sets newSquaresArray to copy of squares, sets selected targetIndex to an 'x', then sets squares to the new array values.
  const [numberOfClicks, setNumberOfClicks] = useState(0)
    // player array states
  const [xPlayer, setXplayer] = useState([])
  const [oPlayer, setOplayer] = useState([])
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Game loop
  const playerClicks = (targetIndex) => {
    updateClicks()
    updateArray(targetIndex)
    winCheck()
  }

    // check if player array includes an array element.
  const winCheck = () => {
    if()
    // check after each turn
    // go to win condition if player wins
  }

  // updates the number of clicks, and checks conditions
  const updateClicks = () => {
    let clickNumber = numberOfClicks + 1
    setNumberOfClicks(clickNumber)
    //check win condition here first
    if(numberOfClicks === 9) {
      return alert("GAME OVER")
    }
  }

//  checks wither an X or O is played
  const updateArray = (targetIndex) => {
    let newSquaresArray = [...squares]
    if(numberOfClicks % 2 === 0){
      newSquaresArray[targetIndex] = "X"
      setSquares(newSquaresArray)
      let newPlayerXArray = [...xPlayer, targetIndex]
      setXplayer(newPlayerXArray)
      console.log(xPlayer)} 
    
    else {newSquaresArray[targetIndex] = "O"
      setSquares(newSquaresArray)
      let newPlayerOArray = [...oPlayer, targetIndex]
      setOplayer(newPlayerOArray)
      console.log(oPlayer)}
      
  }



  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameBoard">

        {/* maps over 'squares' state to create board */}
        {squares.map((value, index) => {
          return <Square 
          key={index}
          index={index}
          value={value}
          // passes function through to component for use
          playerClicks={playerClicks}
          />
        })}
      </div>
    </>
  )
}

export default App
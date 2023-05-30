import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import { click } from '@testing-library/user-event/dist/click'

const App = () => {
  const [hasAWinner, setAWinner] = useState(false)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [theWinner, setTheWinner] = useState("")

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
   

   
  }

    // check if player array includes an array element.
  const winCheck = (array, string) => {
    
    const containsAllElements = 
    lines.some(line => line.every(element => array.includes(element)));
  
    if(containsAllElements) {

      setTheWinner(string)
      setAWinner(true)
      
    }
    if(numberOfClicks >= 8) {
      setAWinner(true)
     
    }
   
    // check after each turn
    // go to win condition if player wins
  }


  // const winCheck = () => {
  //   const containsAllElements = 
  //   lines.some(line => line.every(element => xPlayer.includes(element)));
  //   console.log(xPlayer);
  //   const ocontainsAllElements = 
  //   lines.some(line => line.every(element => oPlayer.includes(element)));
  //   console.log(oPlayer);
  //   if(containsAllElements) {
  //     alert(" X player wins!")
   
  //   } else if (ocontainsAllElements){
  //     alert("Y player wins")
  //   }
  //   if(numberOfClicks >= 8) {
  //     alert("It's a tie!")
  //   }
  // }

  // updates the number of clicks, and checks conditions
  const updateClicks = () => {
    let clickNumber = numberOfClicks + 1
    setNumberOfClicks(clickNumber)
   
 
  }

//  checks wither an X or O is played
  const updateArray = (targetIndex) => {
    let newSquaresArray = [...squares]
    if(numberOfClicks % 2 === 0){
      newSquaresArray[targetIndex] = "X"
      setSquares(newSquaresArray)
      let newPlayerXArray = [...xPlayer, targetIndex]
      setXplayer(newPlayerXArray)
      winCheck(newPlayerXArray, "Player X")
      console.log(xPlayer)} 
    
    else {newSquaresArray[targetIndex] = "O"
      setSquares(newSquaresArray)
      let newPlayerOArray = [...oPlayer, targetIndex]
      setOplayer(newPlayerOArray)
      winCheck(newPlayerOArray, "Player O")
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
        {hasAWinner &&   <>
          <div className = "winText"> {theWinner} has won the game!</div>
          <button>Restart?</button>

          
          </>}

      </div>
    </>
  )
}

export default App
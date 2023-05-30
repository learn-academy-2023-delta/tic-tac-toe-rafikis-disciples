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
  // const [choiceOne, setChoiceOne] = useState([])

  // const playerChoices = [empireIcon, rebelIcon, jediIcon, niteIcon ]

  const empireIcon = <img className="empIcon" src="https://i.stack.imgur.com/hgc0o.png"/>
  
  const rebelIcon = <img className="rebIcon" src="https://upload.wikimedia.org/wikipedia/commons/2/20/Emblem_of_the_Rebel_Alliance.svg"/>

  // const jediIcon = <img className="rebIcon" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/9/9c/Jedi-Order-Insignia.png?width=2240"/>

  // const niteIcon = <img className="rebIcon" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/8/80/Nite_owls.png?width=2240"/>


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

  // choose players
  const playerChoice = (indexNum) => {

  }
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
      setTheWinner("It's a tie, nobody")
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
      newSquaresArray[targetIndex] = empireIcon
      setSquares(newSquaresArray)
      let newPlayerXArray = [...xPlayer, targetIndex]
      setXplayer(newPlayerXArray)
      winCheck(newPlayerXArray, "The Empire")
      console.log(xPlayer)} 
    
    else {newSquaresArray[targetIndex] = rebelIcon
      setSquares(newSquaresArray)
      let newPlayerOArray = [...oPlayer, targetIndex]
      setOplayer(newPlayerOArray)
      winCheck(newPlayerOArray, "The Rebel Alliance")
      console.log(oPlayer)} 
  }

  const refreshPage = () => {window.location.reload()}

  const turnIcon = () => {return (!hasAWinner && numberOfClicks % 2 === 1) ? rebelIcon : empireIcon}


  const turnText = () => {return (!hasAWinner && numberOfClicks % 2 === 1) ? "The Rebel Alliance's Turn" : "The Empire's Turn"}

  return (
    <>
      <h1><span className="title">Tic Tac Toe</span></h1>
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
          <div className='winMessage'>
            <div className = "winText"> {theWinner} has won the game!</div>
            <button className="button" onClick={refreshPage}>Restart?</button>
  
          </div>
          </>}
          {numberOfClicks > 0 && !hasAWinner ? turnIcon() : null}
          {numberOfClicks > 0 && !hasAWinner ? turnText() : null}

      </div>
    </>
  )
}

export default App
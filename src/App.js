import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import { flushSync } from 'react-dom'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [counter, setCounter] = useState(1)
  const [player1, setPlayer1] = useState([])
  const [player2, setPlayer2] = useState([])
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // const empireIcon = <img className="empIcon" src="https://i.stack.imgur.com/hgc0o.png"/>
  
  // const rebelIcon = <img className="rebIcon" src="https://upload.wikimedia.org/wikipedia/commons/2/20/Emblem_of_the_Rebel_Alliance.svg"/>

  // const jediIcon = <img className="rebIcon" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/9/9c/Jedi-Order-Insignia.png?width=2240"/>

  // const niteIcon = <img className="rebIcon" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/8/80/Nite_owls.png?width=2240"/>
console.log(`player1: ${player1}`)
console.log(`player2: ${player2}`)

  // make square clickable
  // make 9 squares on the page 
  // put an X in the square 
  // switch between X and O 
  // don't allow squares to be clicked twice
  
  // adds player's choices to their individual array 
    const playerSquares = (index) => {
      if(counter % 2 === 0) {
        flushSync(() => {
          setPlayer2([...player2, index])
        })
      } else {
        flushSync(() => {
          setPlayer1([...player1, index])
        })
      }
    }

// decides which player's turn it is based on odd or even
    const playerPick = (index) => {
      playerSquares(index)
      winnerCheck(player2)
      if(counter % 2 === 0) {
        setCounter(counter + 1)
        return "O"
      } else {
        setCounter(counter + 1)
        return "X"
      }
    }
 
    // check if player array contains a winning condition
    const winnerCheck = (player) => {
      let partOf = (value) => player.includes(value)
    
        for(let i = 0; i < player.length; i++) {
          if(winConditions[i].every(partOf)) {
            return alert("winner!") 
          }
        }
      }
        
 
  return (
    <>
      <h1>Tic Tac Toe</h1>
        <div className='gameBoard'>
          {squares.map((value, index) => {
            return <Square 
              value={value} 
              index={index}
              key={index}
              playerPick={playerPick}
          />
          })}
        </div>
    </>
  )
}

export default App
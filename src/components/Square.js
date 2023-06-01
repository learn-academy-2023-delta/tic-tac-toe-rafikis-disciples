import React, { useState } from 'react'



const Square = (props) => {
  const [squareVal, setSquareVal] = useState(null)

  return (
    <div className="square" onClick={() => {
      squareVal === null ? setSquareVal(props.playerPick(props.index)) : alert("Choose Another Square")
    }}
    >{squareVal}</div>
  )
}
export default Square


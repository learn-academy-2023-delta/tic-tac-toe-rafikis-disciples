import React, { useState } from 'react'

const Square = (props) => {
  // status of whether the square has been clicked
  const [clickedStatus, setClickedStatus] = useState(false)
  // checks if the square has been clicked (true) or not. If clicked, short-circuites and does not allow a state change. otherwise changes state, and sets status to true
  const handleClick = () => {
    if (clickedStatus) {
      return
    } else {
      setClickedStatus(true)
      props.playerClicks(props.index)
    }
  }

  return (
    // calls handleClick when square is clicked
    <div className="square" onClick={handleClick}>{props.value}</div>
  )
}
export default Square

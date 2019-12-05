import React from 'react'
import { Square } from 'components/Square'

export const Board = () => {
  // TODO - use the 'squares' state from the game reducer
  const squares = []

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}

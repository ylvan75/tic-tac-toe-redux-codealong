import React from 'react'
import { Player } from 'components/Player'

export const Square = ({ value, index }) => {
  const handleClick = () => {
    // TODO send the captureSquare action
  }

  return (
    <button
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} />
    </button>
  )
}

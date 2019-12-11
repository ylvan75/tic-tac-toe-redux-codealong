import React from 'react'
import { useDispatch } from 'react-redux'
import { captureSquare } from 'reducers/game'
import { Player } from 'components/Player'

export const Square = ({ value, index }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    if (value === null) {
      dispatch(captureSquare({ index }))
    }
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

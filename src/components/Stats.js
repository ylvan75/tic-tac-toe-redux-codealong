import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Player } from 'components/Player'
import { restart } from 'reducers/game'

export const Stats = () => {
  const nextPlayer = useSelector((state) => state.game.player)
  const winner = useSelector((state) => state.game.winner)
  const dispatch = useDispatch()

  const handleButtonPress = () => {
    dispatch(restart())
  }

  if (winner) {
    return (
      <div className="stats">
        <p>
          <Player value={winner} /> wins!!!!
        </p>
        <button type="button" onClick={handleButtonPress}>Start new game</button>
      </div>
    )
  }

  return (
    <div className="stats">
      <p>
        Next player <Player value={nextPlayer} />
      </p>
      <button type="button" onClick={handleButtonPress}>Restart</button>
    </div>
  )
}

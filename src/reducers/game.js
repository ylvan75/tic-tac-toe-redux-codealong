/* eslint-disable no-case-declarations */
import { calculateWinner } from 'utils/calculateWinner'

const newGame = {
  squares: [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  winner: null,
  player: 'x'
}

const CAPTURE_SQUARE = 'CAPTURE_SQUARE'
const RESTART = 'RESTART'

export const captureSquare = (payload) => {
  return {
    type: CAPTURE_SQUARE,
    payload
  }
}

export const restart = () => {
  return {
    type: RESTART
  }
}

export const reducer = (state = newGame, action) => {
  switch (action.type) {
    case CAPTURE_SQUARE:
      const newSquares = state.squares.map((square, index) => {
        if (index === action.payload.index) {
          return state.player
        }

        return square
      })

      return {
        ...state,
        squares: newSquares,
        player: state.player === 'x' ? 'o' : 'x',
        winner: state.winner || calculateWinner(newSquares)
      }

    case RESTART:
      return newGame

    default:
      return state
  }
}

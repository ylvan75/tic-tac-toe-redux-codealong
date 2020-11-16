import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { game } from 'reducers/game';

import { Player } from 'components/Player';

export const Stats = () => {
  // TODO - get the 'winner' from the game reducer
  const winner = useSelector((store) => store.game.winner);
  // TODO - get the 'nextPlayer' from the game reducer
  const nextPlayer = useSelector((store) => store.game.player);

  const dispatch = useDispatch();

  const handleButtonPress = () => {
    // TODO - dispatch the restart action
    dispatch(game.actions.restart());
  };

  if (winner) {
    return (
      <div className="stats">
        <p>
          <Player value={winner} /> wins!!!!
        </p>
        <button type="button" onClick={handleButtonPress}>
          Start new game
        </button>
      </div>
    );
  }

  return (
    <div className="stats">
      <p>
        Next player <Player value={nextPlayer} />
      </p>
      <button type="button" onClick={handleButtonPress}>
        Restart
      </button>
    </div>
  );
};

import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { reducer as gameReducer } from './reducers/game'
import { Board } from './components/Board'
import { Stats } from './components/Stats'

const reducer = combineReducers({
  game: gameReducer
})

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Board />
        <Stats />
      </main>
    </Provider>
  )
}

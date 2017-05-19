import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import lyricsReducer from './reducers/lyric-reducer'
import playerReducer from './reducers/player-reducer'

//devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    lyrics: lyricsReducer,
    player: playerReducer
  }),
  /* preloadedState, */ composeEnhancers(
  // reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(loggerMiddleware, thunkMiddleware)
 ));
//  console.log("store in store.js", store)
//  console.log("playerReducer in store.js", playerReducer)

export default store;

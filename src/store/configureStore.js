import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../app/rootReducer'
import thunk from 'redux-thunk'

let store = null

export default function configureStore (initialState) {
  const middlewares = [thunk]
  if (store === null) {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares)
    )
  }

  return store
}

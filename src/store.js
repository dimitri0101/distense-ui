import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'

export const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)

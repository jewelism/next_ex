import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers';

export function initializeStore () {
  return createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware())
  )
}

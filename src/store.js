import { getFirebase } from 'react-redux-firebase'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [
  thunkMiddleware.withExtraArgument(getFirebase)
]

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(
  reducers,
  {},
  composedEnhancer
)

export default store
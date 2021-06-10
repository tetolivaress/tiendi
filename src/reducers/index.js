import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'

import loading from './loading'
import clothes from './clothes'
import locations from './locations'
import days from './days'
import deliveryTypes from './deliveryTypes'

export default combineReducers ({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  loading,
  clothes,
  locations,
  days,
  deliveryTypes
})
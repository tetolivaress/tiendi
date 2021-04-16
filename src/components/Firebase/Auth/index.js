import uiConfig from './UIConfig'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import 'firebase/auth'

const FirebaseAuth = () => 
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

export default FirebaseAuth
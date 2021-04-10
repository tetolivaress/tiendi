import Layout from './components/layout'
import './App.css'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import config from './firebaseConfig'
import 'firebase/auth'

firebase.initializeApp(config)

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/signedIn',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ]
}

const App = () => (
  <Layout>
    <div className="pt-20">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  </Layout>
)

export default App
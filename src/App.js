import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { fbConfig, rrfProps }  from './firebaseConfig'
import store from './store'
import firebase from 'firebase'
import FirebaseAuth from './components/Firebase/Auth'
import Layout from './components/layout'
import './App.css'

firebase.apps.length || firebase.initializeApp(fbConfig )

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps(store)}>
      <Layout>
        <div className="pt-20">
          <FirebaseAuth />
        </div>
      </Layout>
    </ReactReduxFirebaseProvider>
  </Provider>
)

export default App
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { fbConfig, rrfProps }  from './firebaseConfig'
import store from './store'
import firebase from 'firebase'
import Layout from './components/layout'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import FirebaseAuth from './components/Firebase/Auth'


firebase.apps.length || firebase.initializeApp(fbConfig )

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps(store)}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <div className="pt-20">
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={FirebaseAuth}/>
            </div>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
)

export default App
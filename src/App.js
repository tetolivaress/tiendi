import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { fbConfig, rrfProps }  from './FirebaseConfig'
import store from './store'
import firebase from 'firebase'
import Layout from './components/layout'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import WareHouse from './components/warehouse'
import FirebaseAuth from './components/Firebase/Auth'
import Carousel from './components/carousel'


firebase.apps.length || firebase.initializeApp(fbConfig )

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps(store)}>
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={FirebaseAuth}/>
              <Route exact path="/warehouse" component={WareHouse}/>
              <Route exact path="/carousel" component={Carousel}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
)

export default App
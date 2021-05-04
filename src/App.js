import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { fbConfig, rrfProps }  from './FirebaseConfig'
import store from './store'
import firebase from 'firebase'
import Layout from './components/layout'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '@pages'
import WareHouse from '@pages/warehouse'
import FirebaseAuth from './components/Firebase/Auth'
import Categories from '@pages/categories'
import AddCategory from '@pages/categories/AddCategory'


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
            <Route exact path="/categories" component={Categories}/>
            <Route exact path="/categories/add" component={AddCategory}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
)

export default App
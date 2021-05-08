import { StrictMode } from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { fbConfig, rrfProps }  from './FirebaseConfig'
import store from './store'
import firebase from 'firebase'
import App from './App'
import './App.css'

firebase.apps.length || firebase.initializeApp(fbConfig )


render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps(store)}>
      <StrictMode>
        <App />
      </StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)

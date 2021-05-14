
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/layout'

import Home from '@pages'
import WareHouse from '@pages/warehouse'
import FirebaseAuth from './components/Firebase/Auth'
import Categories from '@pages/categories'
import AddCategory from '@pages/categories/Add'
import Backoffice from '@pages/backoffice'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import Loading from './components/Loading'
import { useSelector } from 'react-redux'

const App = () => {
  useFirestoreConnect([
    { collection: 'tiendicategories' }
  ])

  const categories = useSelector(({ firestore }) => firestore.ordered.tiendicategories)

  return (
    <>
      <Loading isOpen={!isLoaded(categories)} />
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={FirebaseAuth}/>
            <Route exact path="/warehouse" component={WareHouse}/>
            <Route exact path="/backoffice/categories" component={Categories}/>
            <Route exact path="/categories/add" component={AddCategory}/>
            <Route exact path="/categories/add" component={AddCategory}/>
            <Route exact path="/backoffice" component={Backoffice}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  )
}
export default App

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/layout'

import Home from '@pages'
import WareHouse from '@pages/warehouse'
import AddClothing from '@pages/warehouse/AddClothing'
import EditClothing from '@pages/warehouse/EditClothing'
import FirebaseAuth from './components/Firebase/Auth'
import Categories from '@pages/categories'
import AddCategory from '@pages/categories/Add'
import EditCategory from '@pages/categories/Edit'
import DeleteCategory from '@components/categories/DeleteCategory'
import Backoffice from '@pages/backoffice'
import Locations from '@pages/backoffice/locations'
import AddLocation from '@pages/backoffice/locations/Add'
import EditLocation from '@pages/backoffice/locations/Edit'
import DeleteLocation from '@components/locations/DeleteLocation'
import NotFound from '@pages/Notfound'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import GlobalLoading from './components/GlobalLoading'
import { useSelector } from 'react-redux'

const App = () => {
  useFirestoreConnect([
    { collection: 'tiendicategories' }
  ])

  const categories = useSelector(({ firestore }) => firestore.ordered.tiendicategories)
  const isLoading = useSelector((state) => state.loading)

  return (
    <>
      <GlobalLoading isOpen={!isLoaded(categories) || isLoading} />
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={FirebaseAuth}/>
            <Route exact path="/warehouse" component={WareHouse}/>
            <Route exact path="/backoffice/warehouse/add" component={AddClothing}/>
            <Route exact path="/backoffice/warehouse/edit" component={EditClothing}/>
            <Route exact path="/backoffice/categories" component={Categories}/>
            <Route exact path="/backoffice/locations" component={Locations}/>
            <Route exact path="/backoffice/locations/add" component={AddLocation}/>
            <Route exact path="/backoffice/locations/edit/:id" component={EditLocation}/>
            <Route exact path="/backoffice/locations/delete/:id" component={DeleteLocation}/>
            <Route exact path="/backoffice/categories/add" component={AddCategory}/>
            <Route exact path="/backoffice/categories/edit/:id" component={EditCategory}/>
            <Route exact path="/backoffice/categories/delete/:id" component={DeleteCategory}/>
            <Route exact path="/backoffice" component={Backoffice}/>
            <Route exact path="*" component={NotFound}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  )
}
export default App
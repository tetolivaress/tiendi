
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/layout'

import Home from '@pages'
import WareHouse from '@pages/warehouse'
import AddClothing from '@pages/warehouse/AddClothing'
import EditClothing from '@pages/warehouse/EditClothing'
import DeleteClothing from '@components/clothes/DeleteClothing'
import FirebaseAuth from './components/Firebase/Auth'
import Categories from '@pages/categories'
import AddCategory from '@pages/categories/Add'
import EditCategory from '@pages/categories/Edit'
import DeleteCategory from '@components/categories/DeleteCategory'
import DeliveryTypes from '@pages/backoffice/DeliveryTypes'
import Days from '@pages/backoffice/Days'
import AddDay from '@pages/backoffice/Days/Add'
import EditDay from '@pages/backoffice/Days/Edit'
import DeleteDay from '@components/Days/DeleteDay'
import EditDeliveryType from '@pages/backoffice/DeliveryTypes/Edit'
import DeleteDeliveryType from '@components/DeliveryTypes/DeleteDeliveryType'
import AddDeliveryType from '@pages/backoffice/DeliveryTypes/Add'
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
  try {
    useFirestoreConnect([
      { collection: 'tiendicategories' }
    ])
  } catch (error) {
    console.log(error)
  }

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
            <Route exact path="/warehouse/add" component={AddClothing}/>
            <Route exact path="/warehouse/edit/:id" component={EditClothing}/>
            <Route exact path="/warehouse/delete/:id" component={DeleteClothing}/>
            <Route exact path="/backoffice/categories" component={Categories}/>
            <Route exact path="/backoffice/locations" component={Locations}/>
            <Route exact path="/backoffice/locations/add" component={AddLocation}/>
            <Route exact path="/backoffice/locations/edit/:id" component={EditLocation}/>
            <Route exact path="/backoffice/locations/delete/:id" component={DeleteLocation}/>
            <Route exact path="/backoffice/categories/add" component={AddCategory}/>
            <Route exact path="/backoffice/categories/edit/:id" component={EditCategory}/>
            <Route exact path="/backoffice/categories/delete/:id" component={DeleteCategory}/>
            <Route exact path="/backoffice/days" component={Days}/>
            <Route exact path="/backoffice/days/add" component={AddDay}/>
            <Route exact path="/backoffice/days/edit/:id" component={EditDay}/>
            <Route exact path="/backoffice/days/delete/:id" component={DeleteDay}/>
            <Route exact path="/backoffice/delivery-types" component={DeliveryTypes}/>
            <Route exact path="/backoffice/delivery-types/add" component={AddDeliveryType}/>
            <Route exact path="/backoffice/delivery-types/edit/:id" component={EditDeliveryType}/>
            <Route exact path="/backoffice/delivery-types/delete/:id" component={DeleteDeliveryType}/>
            <Route exact path="/backoffice" component={Backoffice}/>
            <Route exact component={NotFound}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  )
}
export default App
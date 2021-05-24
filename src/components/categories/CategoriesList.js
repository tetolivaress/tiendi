import CategoryDetail from './CategoryDetail'
import { useFirestoreConnect  } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import AddCategory from './AddCategoryBtn'
import { Link } from 'react-router-dom'


const CategoriesList = () => {

  useFirestoreConnect([
    { collection: 'tiendicategories' }
  ])

  const categories = useSelector((state) => state.firestore.ordered.tiendicategories)

  return (
   <div className="md:mx-60">
    <p className="text-center">Tus Categorias</p>
    {
      categories && categories.map(category => <CategoryDetail category={category} key={category.name} />)
    }
    <Link to="/backoffice/categories/add">
      <AddCategory />
    </Link>
   </div>
  )
}

export default CategoriesList
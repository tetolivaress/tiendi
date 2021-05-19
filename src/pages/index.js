import { useSelector } from 'react-redux'
import { useFirestoreConnect  } from 'react-redux-firebase'
import Carousel from '@components/carousel'
import ClothesList from '@components/clothes/ClothesList'

const Home = () => {
  const categories = useSelector(({ firestore }) => firestore.ordered.tiendicategories)

  return (
    <>
      {
        categories && categories.map(category => (
          <div key={category.id}>
            <p className="text-3xl font-bold">{category.name}</p>
            <ClothesList category={category} />
          </div>
        ))
      }
    </>
  )
}
export default Home
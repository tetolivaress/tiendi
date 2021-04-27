import { useSelector } from 'react-redux'
import { useFirestoreConnect  } from 'react-redux-firebase'
import ClothingDetail from './ClothingDetail'
import Carousel from '@components/carousel'

const Home = () => {
  useFirestoreConnect([
    { collection: 'clothes' } // or 'todos'
  ])
  const clothes = useSelector((state) => state.firestore.ordered.clothes)

  return (
    <>
      {clothes && <Carousel cards={clothes} amountCards={1}/>}
      <div className="w-screen grid grid-cols-2 md:grid-cols-5 grid-rows-5 gap-2 md:gap-4 px-8">
        {
          clothes && clothes.map((clothing, i) => <ClothingDetail key={i} clothing={clothing} />)
        }
      
      </div>
    </>
  )
}
export default Home
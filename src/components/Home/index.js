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
      {clothes && <Carousel cards={clothes} cardsAmount={3}/>}
    </>
  )
}
export default Home
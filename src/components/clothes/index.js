import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded  } from 'react-redux-firebase'
import Carousel from '@components/carousel'
import Loading from '@components/loading'
import ClothesList from './ClothesList'

const Home = () => {
  useFirestoreConnect([
    { collection: 'clothes' } // or 'todos'
  ])
  const clothes = useSelector((state) => state.firestore.ordered.clothes)

  return (
    <>
      <Loading isOpen={!isLoaded(clothes)} />
      {clothes && <Carousel cards={clothes} cardsAmount={2}/>}
      {
        clothes && <ClothesList clothes={clothes} /> 
      }
    </>
  )
}
export default Home
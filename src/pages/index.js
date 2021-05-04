import { useSelector } from 'react-redux'
import { useFirestoreConnect  } from 'react-redux-firebase'
import Carousel from '@components/carousel'
import ClothesList from '@components/clothes/ClothesList'

const Home = () => {
  useFirestoreConnect([
    { collection: 'clothes' } // or 'todos'
  ])
  const clothes = useSelector((state) => state.firestore.ordered.clothes)

  return (
    <>
      {clothes && <Carousel cards={clothes} cardsAmount={2}/>}
      {
        clothes && <ClothesList clothes={clothes} /> 
      }
    </>
  )
}
export default Home
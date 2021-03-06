import ClothingDetail from './ClothingDetail'
import Loading from '@components/Loading'
import { useEffect, useState } from 'react'
import { useFirestore } from 'react-redux-firebase'

const ClothesList = ({ category }) => {

  const [clothes, setClothes] = useState([])

  const firestore = useFirestore()

  const getClothes = async category => {
    const clothesResponse = await firestore
      .collection('clothes')
      .where('categoryId', '==', category.id)
      .get()
    console.log(clothesResponse);
    clothesResponse.docs.forEach(async doc => {
      const clothing = doc.data()
      setClothes(oldClothes => [...oldClothes, clothing])
    })
  } 

  useEffect(() => {
    getClothes(category)
  },[category])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 relative " style={{minHeight: '200px'}}>
      {
        clothes.length
          ? clothes.map(clothing => <ClothingDetail clothing={clothing} />)
          : <Loading isOpen={true} />
      }
    </div>
    )
}

export default ClothesList
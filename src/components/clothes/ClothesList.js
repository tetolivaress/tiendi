import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ClothingDetail from './ClothingDetail'
import Loading from '@components/Loading'
import { getClothes as loadClothes } from '@actions/clothes'

const ClothesList = ({ category }) => {

  const [clothes, setClothes] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    const getClothes = async category => {
      const clothesResponse = await dispatch(loadClothes(category.id))
      clothesResponse.docs.forEach(async doc => {
        const clothing = doc.data()
        setClothes(oldClothes => [...oldClothes, clothing])
      })
    }

    getClothes(category)
  },[category, dispatch])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 relative " style={{minHeight: '200px'}}>
      {
        clothes.length
          ? clothes.map((clothing, i) => <ClothingDetail clothing={clothing} key={clothing.title+i} />)
          : <Loading isOpen={true} />
      }
    </div>
  )
}

export default ClothesList
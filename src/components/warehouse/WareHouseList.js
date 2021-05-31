import { useDispatch, useSelector } from 'react-redux'
import { getAllClothes } from '@actions/clothes'
import { useEffect } from 'react'
import WareHouseClothingDetail from './WarehouseClothingDetail'
// import WareHouseClothing from './WareHouseClothing'


const WarehouseList = () => {
  const dispatch = useDispatch()
  // const categories = useSelector(({ firestore }) => firestore.ordered.tiendicategories)
  const clothes = useSelector(({ clothes }) => clothes.clothes)
  const loadClothes = async () => {
    await dispatch(getAllClothes())
  }

  useEffect(() => {

    loadClothes()
  }, [])

  return (
    <>
      {
        clothes.length && clothes.map(cloth =>
          <WareHouseClothingDetail clothing={cloth} />
        )
        // isLoaded(categories) && categories.map(category => (
        //   <div key={category.id}>
        //     <h2 className="text-center">{category.name}</h2>
        //     {
        //       clothes && clothes.filter(clothing =>  clothing.categoryId == category.id)
        //       .map(cloth =>
        //         <WareHouseClothingDetail clothing={cloth} />
        //       )
        //     }
        //   </div>
        // ))
      }
    </>
  )
}

export default WarehouseList
import { useDispatch, useSelector } from 'react-redux'
import { getClothes } from '@actions/clothes'
import { useEffect } from 'react'
import WareHouseClothingDetail from './WarehouseClothingDetail'


const WarehouseList = ({ category }) => {
  const dispatch = useDispatch()
  const clothes = useSelector(({ clothes }) => clothes)

  const loadClothes = async () => {
    await dispatch(getClothes(category.id))
  }

  useEffect(() => {
    loadClothes()
  }, [])

  return (
    <>
      {clothes.clothes.map(clothing =>  <WareHouseClothingDetail clothing={clothing}/>) }
    </>
  )
}

export default WarehouseList
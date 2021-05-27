import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import WareHouseList from '@components/warehouse/WareHouseList'
import AddBtn from '@components/shared/AddBtn'
import { getAllClothes } from '@actions/clothes'

const WareHouse = () => {
  const categories = useSelector(({ firestore }) => firestore.ordered.tiendicategories)
  const clothes = useSelector(({ clothes }) => clothes.clothes)
  const dispatch = useDispatch()

  const loadClothes = () => {
    dispatch(getAllClothes())
  }

  useEffect(() => loadClothes(), [])

  return (
    <>
      <h1>Warehouse clothes list</h1>
      {
        categories && categories.map(category => (
          <div key={category.id}>
            <h2 className="text-center">{category.name}</h2>
            <WareHouseList category={category} />
          </div>
        ))
      }
      <Link to="/backoffice/warehouse/add">
        <AddBtn />
      </Link>
    </>
  )
}

export default WareHouse
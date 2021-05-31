import { Link } from 'react-router-dom'
import WareHouseList from '@components/warehouse/WareHouseList'
import AddBtn from '@components/shared/AddBtn'

const WareHouse = () => {
  return (
    <>
      <h1>Warehouse clothes list</h1>
      <WareHouseList />
      <Link to="/backoffice/warehouse/add">
        <AddBtn />
      </Link>
    </>
  )
}

export default WareHouse
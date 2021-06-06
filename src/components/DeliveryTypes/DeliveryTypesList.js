import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import DeliveryTypeDetail from './DeliveryTypeDetail'
import AddDeliveryTypeBtn from './AddDeliveryTypeBtn'
import { getDeliveryTypes as loadDeliveryTypes } from '@actions/deliveryTypes'

const DeliveryTypesList = () => {
  const [deliveryTypes, setDeliveryTypes] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getDeliveryTypes = async () => {
      setDeliveryTypes([])
      try {
        const DeliveryTypesResponse = await dispatch(loadDeliveryTypes())
        DeliveryTypesResponse.docs.forEach(async doc => {
          const deliveryType = doc.data()
          setDeliveryTypes(oldDeliveryTypes => [...oldDeliveryTypes, {...deliveryType, id: doc.id}])
        })
      } catch (error) {
        console.log(error)
      }
    }
    getDeliveryTypes()
  }, [dispatch]);

  return (
    <div className="md:mx-60">
      <h1 className="text-center">Tus Tipos de Entrega</h1>
      {
        deliveryTypes.length > 0 && deliveryTypes.map((deliveryType, i) =>
          <DeliveryTypeDetail
            deliveryType={deliveryType}
            key={deliveryType.id}
          />
        )
      }
      <Link to="/backoffice/delivery-types/add">
        <AddDeliveryTypeBtn />
      </Link>
    </div>
  )
}

export default DeliveryTypesList
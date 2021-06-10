import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DeliveryTypeDetail from './DeliveryTypeDetail'
import AddDeliveryTypeBtn from './AddDeliveryTypeBtn'
import { getDeliveryTypes } from '@actions/deliveryTypes'

const DeliveryTypesList = () => {
  const dispatch = useDispatch()
  const deliveryTypes = useSelector(({ deliveryTypes }) => deliveryTypes.deliveryTypes)

  const loadDeliveryTypes = async () => {
    await dispatch(getDeliveryTypes())
  }

  useEffect(() => {
    
    loadDeliveryTypes()
  }, [])

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
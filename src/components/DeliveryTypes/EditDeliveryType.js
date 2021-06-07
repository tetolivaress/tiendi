import { useState } from 'react'
import { useHistory } from 'react-router'
import DeliveryTypeForm from './DeliveryTypeForm'
import { addDeliveryType } from '@actions/deliveryTypes'
import { useDispatch } from 'react-redux'

// import { addDeliveryType } from '@actions'

const AddDeliveryType = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: ''
  })

  const handleChange = (({target: { name, value }}) => {
    const fieldValue = value

    setForm({...form, [name]: fieldValue})
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await dispatch(addDeliveryType(form))
      history.push('/backoffice/DeliveryTypes')
    } catch (error) {
      console.error('There was an error while storing the delivery type: ', error)
    }
  }

  return (
    <>
      <h1 className="text-center font-bold text-3xl">Nuevo Lugar</h1>
      <DeliveryTypeForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
    </>
  )
}

export default AddDeliveryType
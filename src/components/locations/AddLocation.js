import { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useHistory } from 'react-router'
import LocationForm from './LocationForm'
import { addLocation } from '@actions/locations'
import { showLoading, hideLoading } from '@actions/loading'
import { useDispatch } from 'react-redux'

// import { addLocation } from '@actions'

const AddLocation = () => {

  const firestore = useFirestore()
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
      await dispatch(addLocation(form))
      history.push('/backoffice/locations')
    } catch (error) {
      console.error('There was an error while storing the location: ', error)
    }
  }

  return (
    <>
      <h1 className="text-center font-bold text-3xl">Nuevo Lugar</h1>
      <LocationForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
    </>
  )
}

export default AddLocation
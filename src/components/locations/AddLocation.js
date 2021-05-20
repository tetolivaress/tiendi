import { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import LocationForm from './LocationForm'

import readFileAsync from '@utils/FileReader'
import resizeImage from '@utils/ImageReader'
import { useHistory } from 'react-router'

// import { addLocation } from '@actions'
import { useDispatch } from 'react-redux'

const AddLocation = () => {

  const dispatch = useDispatch()

  const firestore = useFirestore()
  const history = useHistory()

  const [form, setForm] = useState({
    name: ''
  })

  const handleChange = (({target: { name, value }}) => {
    const fieldValue = value

    setForm({...form, [name]: fieldValue})
  })

  const handleSubmit = async e => {
    e.preventDefault()
    // dispatch({ type: 'SHOW_LOADING' })
    await firestore.collection('locations').add(form)
    history.push('/backoffice/locations')
    // await dispatch(addLocation({...form}))
  }

  return (
    <>
      <h1 className="text-center font-bold text-3xl">Nuevo Lugar</h1>
      <LocationForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
    </>
  )
}

export default AddLocation
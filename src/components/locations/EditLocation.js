import { useEffect, useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useParams, useHistory } from 'react-router-dom'
import LocationForm from '@components/locations/LocationForm'

const EditLocation = () => {
  const [form, setForm] = useState({
    name: ''
  })
  const firestore = useFirestore()
  const history = useHistory()
  const { id } = useParams()

  const getLocation = async () => {
		console.log(id)
    const locationResponse = await firestore
      .collection('locations')
      .doc(id)
      .get()
    const location = locationResponse.data()
    setForm(() => { return {...location, id: locationResponse.id} })
  }

  const handleChange = (({target: { name, value }}) => {
    const fieldValue = value

    setForm({...form, [name]: fieldValue})
  })

  const handleSubmit = async e => {
    e.preventDefault()
    // dispatch({ type: 'SHOW_LOADING' })
    await firestore
      .collection('locations')
      .doc(form.id)
      .update({
        name: form.name
      })
    history.push('/backoffice/locations')
    // await dispatch(addLocation({...form}))
  }

  useEffect(() => {
    getLocation()
  }, []);

  return (
    <>
      <h1 className="text-center">Editar categoría {form.name}</h1>
      <LocationForm form={form} toEdit onChange={handleChange} onSubmit={handleSubmit}/>
    </>
  )
}

export default EditLocation
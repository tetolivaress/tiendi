import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LocationForm from '@components/locations/LocationForm'
import { getLocation as loadLocation, updateLocation } from '@actions/locations'

const EditLocation = () => {
  const [form, setForm] = useState({
    name: ''
  })
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()

  const getLocation = async () => {
    try {
      const locationResponse = await dispatch(loadLocation(id))
      const location = locationResponse.data()
      setForm(() => { return {...location, id: locationResponse.id} })
    } catch (error) {
      console.error('There was an error while getting the location', error)
    }
  }

  const handleChange = (({target: { name, value }}) => {
    const fieldValue = value

    setForm({...form, [name]: fieldValue})
  })

  const handleSubmit = async e => {
    e.preventDefault()
    // dispatch({ type: 'SHOW_LOADING' })
    await dispatch(updateLocation(form))
    history.push('/backoffice/locations')
    // await dispatch(addLocation({...form}))
  }

  useEffect(() => {
    getLocation()
  }, []);

  return (
    <>
      <h1 className="text-center">Editar {form.name}</h1>
      <LocationForm form={form} toEdit onChange={handleChange} onSubmit={handleSubmit}/>
    </>
  )
}

export default EditLocation
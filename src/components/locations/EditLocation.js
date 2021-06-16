import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import LocationForm from '@components/locations/LocationForm'
import { getLocation as loadLocation, updateLocation } from '@actions/locations'
import validate from './validations'

const EditLocation = () => {
  const [form, setForm] = useState({
    name: ''
  })
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()

  const formik = useFormik({
    initialValues: {
      name: form.name
    },
    validate,
    onSubmit: async values => {
      try {
        await dispatch(updateLocation(values))
        history.push('/backoffice/locations')
      } catch (error) {
        console.error('There was an error while updating the location: ', error)
      }
    }
  })

  useEffect(() => {
    const getLocation = async () => {
      try {
        const locationResponse = await dispatch(loadLocation(id))
        const location = locationResponse.data()
        formik.values.name = location.name
        setForm(() => { return {...location, id: locationResponse.id} })
      } catch (error) {
        console.error('There was an error while getting the location', error)
      }
    }
    getLocation()
  }, [dispatch, id]);

  return (
    <>
      <h1 className="text-center">Editar {form.name}</h1>
      <LocationForm formik={formik}/>
    </>
  )
}

export default EditLocation
import { useState } from 'react'
import { useHistory } from 'react-router'
import LocationForm from './LocationForm'
import { addLocation } from '@actions/locations'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import validate from './validations'

const AddLocation = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validate,
    onSubmit: async values => {
      try {
        await dispatch(addLocation(values))
        history.push('/backoffice/locations')
      } catch (error) {
        console.error('There was an error while storing the location: ', error)
      }
    }
  })

  return (
    <>
      <h1 className="text-center font-bold text-3xl">Nuevo Lugar</h1>
      <LocationForm
        formik={formik}
      />
    </>
  )
}

export default AddLocation
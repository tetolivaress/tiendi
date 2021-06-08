import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import DayForm from './DayForm'
import { getDay as loadDay, updateDay } from '@actions/days'

const EditDay = () => {
  const [form, setForm] = useState({
    name: ''
  })
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()

  const handleChange = (({target: { name, value }}) => {
    const fieldValue = value

    setForm({...form, [name]: fieldValue})
  })

  const handleSubmit = async e => {
    e.preventDefault()
    // dispatch({ type: 'SHOW_LOADING' })
    await dispatch(updateDay(form))
    history.push('/backoffice/days')
    // await dispatch(addDay({...form}))
  }

  useEffect(() => {
    const getDay = async () => {
      try {
        const dayResponse = await dispatch(loadDay(id))
        const day = dayResponse.data()
        setForm(() => { return {...day, id: dayResponse.id} })
      } catch (error) {
        console.error('There was an error while getting the day', error)
      }
    }
    getDay()
  }, [dispatch, id]);

  return (
    <>
      <h1 className="text-center">Editar {form.name}</h1>
      <DayForm form={form} toEdit onChange={handleChange} onSubmit={handleSubmit}/>
    </>
  )
}

export default EditDay
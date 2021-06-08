import { useState } from "react"
import { useDispatch } from "react-redux"
import DayForm from "./DayForm"
import { addDay } from "@actions/days"
import { useHistory } from "react-router"

const AddDay = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [form, setForm] = useState({
    name: ""
  })

  const handleChange = (({target: { name, value }}) => {
    const fieldValue = value

    setForm({...form, [name]: fieldValue})
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await dispatch(addDay(form))
      history.push('/backoffice/days')
    } catch (error) {
      console.error('There was an error while storing the day: ', error)
    }
  }

  return (
    <>
      <h1 className="text-center">Nuevo Día de entrega</h1>
      <DayForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        form={form}
      />
    </>
  )
}

export default AddDay

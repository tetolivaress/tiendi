import { useState } from 'react'
import { useDispatch } from 'react-redux'
import CategoryForm from './CategoryForm'
import { addCategory } from '@actions/categories'
import { useHistory } from 'react-router'

const AddCategory = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [form, setForm] = useState({
    name: '',
    image: '',
    order: 0
  })

  const handleChange = ({target: { name, value }}) => setForm({...form, [name]: value})

  const handleImage = async (e) => {
    console.log('Loading Image')
    try{
      const file = await readFileAsync(e.target.files[0], 80)
      const image = await resizeImage(file, 80)
      setForm({...form, image})
      console.log('Image Ready')
    }catch (error) {
      alert('Los archivos solo pueden ser tipo JPEG, JPG ó PNG')
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await dispatch(addCategory(form))
    history.push("/categories")
  }

  return (
    <>
      <h1>This is to add</h1>
      <CategoryForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        form={form}
      />
    </>
  )
}

export default AddCategory;
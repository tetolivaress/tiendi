import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import CategoryForm from "./CategoryForm"
import { getCategory as loadCategory, updateCategory } from "@actions/categories"
import { useHistory, useParams } from "react-router"
import readFileAsync from "@utils/FileReader"
import resizeImage from "@utils/ImageReader"

const EditCategory = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const [form, setForm] = useState({
    name: "",
    image: "",
    order: 0,
  })

  const getCategory = async () => {
    const categoryResponse = await dispatch(loadCategory(id))
    const category = categoryResponse.data()
    setForm(() => { return { ...category, id: categoryResponse.id } })
  }

  useEffect(() => {
    getCategory()
  }, [])

  const handleChange = async ({ target: { name, value, type, files } }) => {
    const fieldValue = type === "file" ? await handleImage(files[0]) : value

    setForm({ ...form, [name]: fieldValue })
  }

  const handleImage = async (file) => {
    try {
      const fileB64 = await readFileAsync(file)
      const image = await resizeImage(fileB64)
      return image
    } catch (error) {
      alert("Los archivos solo pueden ser tipo JPEG, JPG ó PNG")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(updateCategory(form))
    history.push("/backoffice/categories")
  }
  
  return ( 
    <CategoryForm
      form={form}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}

export default EditCategory
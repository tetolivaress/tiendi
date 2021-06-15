import { useState } from "react"
import { useDispatch } from "react-redux"
import CategoryForm from "./CategoryForm"
import { addCategory } from "@actions/categories"
import { useHistory } from "react-router"
import readFileAsync from "@utils/FileReader"
import resizeImage from "@utils/ImageReader"

const AddCategory = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [form, setForm] = useState({
    name: "",
    image: "",
    order: 0,
  })

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
    await dispatch(addCategory(form))
    history.push("/backoffice/categories")
  }

  return (
    <>
      <h1 className="text-center">Nueva Categoría</h1>
      <CategoryForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        form={form}
      />
    </>
  )
}

export default AddCategory

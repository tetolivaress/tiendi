import { useState } from "react"
import { useFirestore } from "react-redux-firebase"
import readFileAsync from '@utils/FileReader'
import resizeImage from '@utils/ImageReader'
import { useHistory } from "react-router"

const CategoryForm = () => {

  const history = useHistory()

  const [form, setForm] = useState({
    name: '',
    image: '',
    order: 0
  })

  const handleChange = ({target: { name, value }}) => setForm({...form, [name]: value})

  const handleSubmit = async e => {
    e.preventDefault()
    await firestore.collection('tiendicategories').add(form)
    return history.push("/categories")
  }

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

  const firestore = useFirestore()

  return (
    <div className="w-screen grid grid-cols-1 md:grid-cols-2">
      <form
        onSubmit={handleSubmit}
      >
        <input
          className="my-2 p-4 bg-gray-300"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          className="my-2 p-4 bg-gray-300"
          name="carousel"
          placeholder="carousel"
          value={form.carousel}
          onChange={handleChange}
        />
        <input
          type="number"
          className="my-2 p-4 bg-gray-300"
          name="order"
          placeholder="order"
          value={form.order}
          onChange={handleChange}
        />
        <div>
          <label htmlFor="image" className="bg-red-500 m-5 p-5 hover:transform hover:scale-105 transition-all duration-150S">
            selecciona una imagen
          </label>
          <input
            id="image"
            className="hidden my-2 p-4 bg-gray-300"
            name="image"
            placeholder="image"
            onChange={handleImage}
            type="file"
          />
        </div>

        <button className="bg-green-200">Guardar</button>

      </form>
    </div>
  )
}

export default CategoryForm
import { useState } from "react"
import { useSelector } from "react-redux"
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import readFileAsync from '../../utils/FileReader'
import resizeImage from '../../utils/ImageReader'

const WareHouseForm = () => {
  const firestore = useFirestore()
  const [form, setForm] = useState({
    title: '',
    price: '',
    image: '',
    category: ''
  })

  
  useFirestoreConnect([
    { collection: 'tiendicategories' }
  ])

  const categories = useSelector((state) => state.firestore.ordered.tiendicategories)

  const handleChange = ({target: { name, value }}) => setForm({...form, [name]: value})

  const handleSubmit = e => {
    e.preventDefault()
    return firestore.collection('clothes').add(form)
  }

  const handleImage = async (e) => {
    console.log('Loading Image')
    try{
      const file = await readFileAsync(e.target.files[0])
      const image = await resizeImage(file)
      setForm({...form, image})
      console.log('Image Ready')
    }catch (error) {
      alert('Los archivos solo pueden ser tipo JPEG, JPG ó PNG')
    }
  }

  return (
    <div className="w-screen grid grid-cols-1 md:grid-cols-2">
      <form
        className="h-96 p-12 text-center flex justify-center flex-col grid"
        onSubmit={handleSubmit}
      >
        <input
          className="my-2 p-4 bg-gray-300"
          name="title"
          placeholder="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          className="my-2 p-4 bg-gray-300"
          name="price"
          type="number"
          placeholder="price"
          value={form.price}
          onChange={handleChange}
        />
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
        <select
          className="my-2 p-4 bg-gray-300"
          name="category"
          placeholder="category"
          value={form.category}
          onChange={handleChange}
        >
          {
            categories.map(({ id, name }) => <option value={id}>{name}</option>)
          }
        </select>
        <button className="bg-green-200">Guardar</button>
      </form>
      
      <div>
        <p className="texr-gray-800 mt-5">{form.title}</p>
        <img src={form.image} alt="asd" className="mx-10 my-2"/>
        <p className="texr-gray-800">{form.price}</p>
        <p className="texr-gray-800">{form.category}</p>
      </div>
    </div>
  )
}
export default WareHouseForm
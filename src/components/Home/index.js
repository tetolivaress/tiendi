import { useState } from "react"
import { useFirestore } from 'react-redux-firebase'

const Home = () => {
  const firestore = useFirestore()
  const [form, setForm] = useState({
    title: '',
    price: '',
    image: '',
    category: ''
  })

  const handleChange = ({target: { name, value }}) => setForm({...form, [name]: value})

  const handleSubmit = e => {
    e.preventDefault()
    return firestore.collection('clothes').add(form)
  }

  const handleFile = (e, width = 480) => {

    const reader = new FileReader()
    reader.onload = e => {
      let img = new Image()
      img.src = e.target.result
      img.onload = () => {
        let canvas = document.createElement("canvas")
        let ctx = canvas.getContext("2d")
        // Set Canvas Height And Width According to Image Size And Scale
        img.width > img.height
          ? canvas.setAttribute("width", width)
          : canvas.setAttribute("width", (width * img.width) / img.height)
        img.width > img.height
          ? canvas.setAttribute("height",(img.height * width) / img.width)
          : canvas.setAttribute("height", width)
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        return setForm({image: canvas.toDataURL("image/jpeg", 0.9)})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <form
      className="h-96 p-12 w-screen text-center flex justify-center flex-col"
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
        onChange={e => setForm({...form, image: handleFile(e)})}
        type="file"
      />
      <select
        className="my-2 p-4 bg-gray-300"
        name="category"
        placeholder="category"
        value={form.category}
        onChange={handleChange}
      >
        <option>blusa</option>
        <option>pantalon</option>
        <option>vestido</option>
      </select>
      <button className="bg-green-200">Guardar</button>

      <img src={form.image} className="w-1/2"/>

    </form>
  )
}
export default Home
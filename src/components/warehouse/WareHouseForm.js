import { useState } from "react"
import { useSelector } from "react-redux"
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ClothingPreview from './ClothingPreview'
import { ChromePicker  } from 'react-color';

import readFileAsync from '../../utils/FileReader'
import resizeImage from '../../utils/ImageReader'
import { PlusIcon, XIcon } from "@heroicons/react/outline"

const WareHouseForm = () => {
  const firestore = useFirestore()
  const [form, setForm] = useState({
    title: '',
    price: '',
    image: '',
    category: '',
    description: '',
    details: '',
    available: true,
    discount: 0,
    colors: [],
    sizes: [],
    sizeField: ''
  })

  const categories = useSelector(({ firestore }) => firestore.ordered.tiendicategories)

  const handleChange = ({target: { name, value, type, checked }}) =>
    type === 'checkbox'
     ? setForm({...form, [name]: checked})
     : setForm({...form, [name]: value})

  const handleSubmit = async e => {
    e.preventDefault()
    await firestore.collection('clothes').add(form)
  }

  const handleImage = async (e) => {
    try{
      const file = await readFileAsync(e.target.files[0])
      const image = await resizeImage(file)
      setForm({...form, image})
      console.log('Image Ready')
    }catch (error) {
      alert('Los archivos solo pueden ser tipo JPEG, JPG ó PNG')
    }
  }

  const handleColors = ({ hex }) => {
    setForm({...form, colors: [...form.colors, hex]})
  }

  return (
    <div className="w-screen grid grid-cols-1 md:grid-cols-2">
      <form
        className="text-center flex justify-center flex-col p-8"
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
        <input
          className="my-2 p-4 bg-gray-300"
          name="discount"
          type="number"
          placeholder="discount"
          value={form.discount}
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
            categories && categories.map(({ id, name }) => <option key={id} value={id}>{name}</option>)
          }
        </select>
        <textarea
          className="my-2 p-4 bg-gray-300 h-24"
          name="description"
          rows={3}
          placeholder="description"
          value={form.description}
          onChange={handleChange}
        />

        <CKEditor
          editor={ ClassicEditor }
          data={form.details}
          onChange={ ( event, editor ) => setForm({...form, details: editor.getData()}) }
        />
        
        <div>
          <div>
            <ChromePicker 
              className="my-2 p-4 bg-gray-300"
              placeholder="colors"
              color={form.colors}
              onChangeComplete={handleColors}
            />
            <div>
              {
                form.colors.map(color => <span className="h-4 w-4" style={{backgroundColor:color}}></span>)
              }
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2">
            {
              form.colors.map(color => (
                <div className="h-6 w-6 p-6 relative rounded-lg" style={{backgroundColor:color}}>
                  <XIcon
                    className="absolute top-0 right-0 w-6 h-6 text-white bg-opacity-50 bg-black cursor-pointer rounded-bl-lg rounded-tr-lg"
                    onClick={() => {
                      setForm({...form, colors: [...form.colors.filter(c=>c!==color)]})
                    }}
                  />
                </div>
              ))
            }
          </div>
        </div>

        <div>
          <div className="flex">
            <input
              className="my-2 p-4 bg-gray-300 flex-grow"
              name="sizeField"
              type="text"
              placeholder="sizes"
              value={form.sizeField}
              onChange={handleChange}
            />
            <div
              className="bg-red-600 p-8"
              onClick={()=> setForm({...form, sizes: [...form.sizes, form.sizeField]})}
            >
              <PlusIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {
              form.sizes.map(size => (
                <div className="bg-gray-200 p-4 relative">
                  <span>{size}</span>
                  <XIcon
                    className="absolute top-0 right-0 w-6 h-6 text-white bg-opacity-50 bg-black cursor-pointer rounded-bl-lg rounded-tr-lg"
                    onClick={() => {
                      setForm({...form, sizes: [...form.sizes.filter(s=>s!==size)]})
                    }}
                  />
                </div>
              ))
            }
          </div>
        </div>

        <div>
          <label htmlFor="available">
            Disponible
          </label>
          <input
            className="my-2 p-4 bg-gray-300"
            name="available"
            id="available"
            type="checkbox"
            placeholder="available"
            checked={form.available}
            onChange={handleChange}
          />
        </div>

        <button className="bg-green-200">Guardar</button>
      </form>
      <div className="m-12 p-12">
        {/* <ClothingPreview clothing={form}/> */}
      </div>
    </div>
  )
}
export default WareHouseForm
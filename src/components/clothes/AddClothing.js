import { useState } from 'react'
import WareHouseForm from '@components/warehouse/WareHouseForm'
import { useDispatch, useSelector } from 'react-redux'
import readFileAsync from '@utils/FileReader'
import resizeImage from '@utils/ImageReader'
import { addClothes } from '@actions/clothes'

const AddClothing = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    title: '',
    price: '',
    images: [],
    categoryId: '',
    description: '',
    details: '',
    available: true,
    discount: 0,
    colors: [],
    sizes: [],
    sizeField: ''
  })

  const categories = useSelector(({ firestore }) => firestore.ordered.tiendicategories)

  const handleChange = ({target: { name, value, type, checked }, editor}) =>
    type === 'checkbox'
     ? setForm({...form, [name]: checked})
     : setForm({...form, [name]: value})

  const handleDetailChange = ({ target }, editor) => {
    setForm({...form, details: editor.getData()})
  }

  const handleImage = async (e) => {
    try{
      let readyImages = []
      console.log(e)
      for (let index = 0; index < e.target.files.length; index++) {
        let file = await readFileAsync(e.target.files[index])
        let image = await resizeImage(file)
        readyImages.push(image)
      }
      setForm({...form, images: [...form.images, ...readyImages]})
      console.log('Image Ready')
    }catch (error) {
      console.log('Los archivos solo pueden ser tipo JPEG, JPG ó PNG', error)
    }
  }

  const handleDeleteImage = (imageToDelete) => {
    setForm({...form, images: [...form.images.filter(image=>image!==imageToDelete)]})
  }

  const handleChangeColor = (color) => {
    setForm({...form, colors: [...form.colors, color]})
  }

  const handleDeleteColor = (color) => {
    setForm({...form, colors: [...form.colors.filter(c=>c!==color)]})
  }

  const handleChangeSize = (size) => {
    setForm({...form, sizes: [...form.sizes, size]})
  }

  const handleDeleteSize = (size) => {
    setForm({...form, sizes: [...form.sizes.filter(s=>s!==size)]})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await dispatch(addClothes(form))
    // await firestore.collection('clothes').add(form)
  }

  return (
    <WareHouseForm
      form={form}
      categories={categories}
      onChange={handleChange}
      onSubmit={handleSubmit}
      handleChangeColor={handleChangeColor}
      handleDeleteColor={handleDeleteColor}
      handleImage={handleImage}
      handleChangeSize={handleChangeSize}
      handleDeleteSize={handleDeleteSize}
      handleDetailChange={handleDetailChange}
      handleDeleteImage={handleDeleteImage}
    />
  )
}

export default AddClothing
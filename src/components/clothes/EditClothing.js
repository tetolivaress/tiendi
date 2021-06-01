import { useEffect, useState } from 'react'
import WareHouseForm from '@components/warehouse/WareHouseForm'
import { useDispatch, useSelector } from 'react-redux'
import readFileAsync from '@utils/FileReader'
import resizeImage from '@utils/ImageReader'
import { getClothing } from '@actions/clothes'
import { useParams } from 'react-router'

const EditClothing = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [form, setForm] = useState({
    title: '',
    price: '',
    image: '',
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

  useEffect(() => {
    const loadClothing = async () => {
      try {
        const clothingResponse = await dispatch(getClothing(id))
        const clothing = clothingResponse.data()
        console.log(clothing)
        setForm(() => { return {...clothing}})
      } catch (error) {
        console.log(error)
      }
    }

    loadClothing()
  }, [])

  const handleChange = ({target: { name, value, type, checked }, editor}) =>
    type === 'checkbox'
     ? setForm({...form, [name]: checked})
     : setForm({...form, [name]: value})

  const handleDetailChange = ({ target }, editor) => {
    setForm({...form, details: editor.getData()})
  }

  const handleImage = async (e) => {
    try{
      console.log(e)
      const file = await readFileAsync(e.target.files[0])
      const image = await resizeImage(file)
      setForm({...form, image})
      console.log('Image Ready')
    }catch (error) {
      alert('Los archivos solo pueden ser tipo JPEG, JPG ó PNG', error)
    }
  }

  const handleChangeColor = (color) => {
    setForm({...form, colors: [...form.colors, color]})
  }

  const handleDeleteColor = (color) => {
    setForm({...form, colors: [...form.colors.filter(c=>c!==color)]})
  }

  const handleChangeSize = (sizes) => {
    setForm({...form, sizes})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    // await dispatch(updateClothes(form))
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
      handleDetailChange={handleDetailChange}
    />
  )
}

export default EditClothing
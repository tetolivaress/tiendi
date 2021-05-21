import { PencilIcon } from '@heroicons/react/solid'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CategoryDetail = ({ category }) => {

  return (
    <section className='grid grid-cols-4 shadow-sm m-4 items-center'>
      <img src={category.image} alt={category.name} />
      <div className='col-span-2'>
        <h2>{category.name}</h2>
        <h2>jajaja</h2>
      </div>
      <Link to={`/backoffice/categories/edit/${category.id}`}><PencilIcon className='w-5'></PencilIcon></Link>
    </section>
  )
}

export default CategoryDetail
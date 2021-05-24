import { PencilIcon, XIcon } from '@heroicons/react/solid'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CategoryDetail = ({ category }) => {

  return (
    <section className='grid grid-cols-4 shadow-sm m-4 items-center'>
      <img src={category.image} alt={category.name} className="list-image" />
      <div className='col-span-2'>
        <h2>{category.name}</h2>
      </div>
      <div className="flex justify-end">
        <Link to={`/backoffice/categories/edit/${category.id}`}>
          <PencilIcon className='w-5 mr-4' />
        </Link>
        <Link to={`/backoffice/categories/edit/${category.id}`}>
          <XIcon className='w-5' />
        </Link>
      </div>
    </section>
  )
}

export default CategoryDetail
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
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-end gap-1">
        <Link to={`/backoffice/categories/edit/${category.id}`} className="list-action-button bg-green-500 font-semibold">
          <span>Editar</span>
          <PencilIcon className='w-5' />
        </Link>
        <Link to={`/backoffice/categories/delete/${category.id}`} className="list-action-button bg-red-500 font-semibold">
          <span>Borrar</span>
          <XIcon className='w-5' />
        </Link>
      </div>
    </section>
  )
}

export default CategoryDetail
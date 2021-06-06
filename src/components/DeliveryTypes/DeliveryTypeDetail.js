import { PencilIcon, XIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const DeliveryTypeDetail = ({ deliveryType }) => {
  return (
    <section className='grid grid-cols-3 shadow-sm m-4 items-center'>
      <div className='col-span-2'>
        <h2 className="overflow-clip">{deliveryType.name}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-end gap-1">
        <Link to={`/backoffice/delivery-types/edit/${deliveryType.id}`} className="list-action-button bg-green-500 font-semibold">
          <span>Editar</span>
          <PencilIcon className='w-5' />
        </Link>
        <Link to={`/backoffice/delivery-types/delete/${deliveryType.id}`} className="list-action-button bg-red-500 font-semibold">
          <span>Borrar</span>
          <XIcon className='w-5' />
        </Link>
      </div>
    </section>
  )
}

export default DeliveryTypeDetail
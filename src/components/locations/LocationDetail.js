import { PencilIcon, XIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const LocationDetail = ({ location }) => {
  return (
    <div className="flex justify-between items-center shadow-sm p-3 grow font-bold">
      <span>{location.name}</span>
      <div className="flex justify-end">
        <Link to={`/backoffice/locations/edit/${ location.id }`} className="p-1 flex">
          <PencilIcon className="w-3 text-blue-500 cursor-pointer"></PencilIcon>
        </Link>
        <Link to={`/backoffice/locations/delete/${ location.id }`} className="p-1 flex">
          <XIcon className="w-3 text-blue-500 cursor-pointer" />
        </Link>
      </div>
    </div>
  )
}

export default LocationDetail
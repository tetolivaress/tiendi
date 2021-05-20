import { PencilIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const LocationDetail = ({ location }) => {
  return (
    <div className="flex justify-between items-center shadow-sm p-3 grow font-bold">
      <span>{location.name}</span>
      <Link to={`/backoffice/locations/edit/${ location.name.toLowerCase() }`} className="p-1">
        <PencilIcon className="w-8 h-8 sm:w-4 sm:h-4 text-blue-800 cursor-pointer"></PencilIcon>
      </Link>
    </div>
  )
}

export default LocationDetail
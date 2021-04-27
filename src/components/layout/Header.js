import { Link } from "react-router-dom"
import { UserIcon } from '@heroicons/react/solid'
import { FolderIcon } from '@heroicons/react/solid'

const Header = () => (
  <nav className="flex justify-between fixed text-center font-bold top-0 bg-pink-100 text-green-700 p-4 w-full">
    <Link to={"/"}>
      <p>Tiendi Shop Header</p>
    </Link>
    <div className="inline-flex space-x-8">
      <Link to="/login" className="h-5 w-5 text-blue-500">
        <UserIcon className="h-5 w-5 text-blue-500"/>
      </Link>
      <Link to="/warehouse" className="h-5 w-5 text-blue-500">
        <FolderIcon className="h-5 w-5 text-blue-500"/>
      </Link>
    </div>
  </nav>
)

export default Header
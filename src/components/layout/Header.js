import { Link, useHistory } from "react-router-dom"
import { UserIcon, FolderIcon, CogIcon, LogoutIcon } from '@heroicons/react/solid'
import firebase from 'firebase'
import { showLoading, hideLoading } from '@actions/loading'

const Header = () => {
  const history = useHistory()
  const handleLogout = () => {
    showLoading()
    firebase.auth().signOut()
    hideLoading()
    history.push('/')
  }
  return (
    <nav className="flex justify-between fixed text-center font-bold top-0 bg-pink-100 text-green-700 p-4 w-full z-50">
      <Link to={"/"}>
        <p>Tiendi Shop Header</p>
      </Link>
      <div className="inline-flex space-x-8">
        <Link to="/login" className="h-5 w-5 text-blue-500">
          <UserIcon className="h-5 w-5 text-blue-500"/>
        </Link>
        {firebase.auth().currentUser &&
        <Link to="/backoffice" className="h-5 w-5 text-blue-500">
          <CogIcon className="h-5 w-5 text-blue-500"/>
        </Link>}
        <Link to="/warehouse" className="h-5 w-5 text-blue-500">
          <FolderIcon className="h-5 w-5 text-blue-500"/>
        </Link>
        {firebase.auth().currentUser && <button className="h-5 w-5 text-blue-500" onClick={handleLogout}>
          <LogoutIcon className="h-5 w-5 text-blue-500"/>
        </button>}
      </div>
    </nav>
  )
}

export default Header
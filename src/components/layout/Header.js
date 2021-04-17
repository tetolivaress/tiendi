import { Link } from "react-router-dom"

const Header = () => (
  <nav className="flex justify-between fixed text-center font-bold top-0 bg-pink-100 text-green-700 py-4 w-full">
    <Link to={"/"}>
      <p>Tiendi Shop Header</p>
    </Link>
    <Link to="/login">Login</Link>
  </nav>
)

export default Header
import { Link } from "react-router-dom"

const Backoffice = () => (
  <>
    <Link to="categories" className="shadow m-8 p-4">
      Categorías del sitio
    </Link>
    <Link to="categories" className="shadow m-8 p-4">
      Lugares de entrega
    </Link>
  </>
)

export default Backoffice
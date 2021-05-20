import { Link } from "react-router-dom"

const Backoffice = () => (
  <>
    <div className="grid md:grid-cols-4 gap-8">
      <Link to="/backoffice/categories" className="shadow p-4 text-center text-blue-500">
        Categorias
      </Link>
      <Link to="/backoffice/locations" className="shadow p-4 text-center text-blue-500">
        Lugares
      </Link>
      <Link to="/warehouse" className="shadow p-4 text-center text-blue-500">
        Almacén
      </Link>
    </div>
  </>
)

export default Backoffice
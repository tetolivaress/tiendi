import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
      <h1 className="text-center text-2xl mb-4">La página que buscas no fue encontada</h1>
      <p className="text-center text-xl">Por favor, <Link to="/" className="text-blue-500">vuelve al inicio</Link></p>
    </>
  )
}

export default NotFound
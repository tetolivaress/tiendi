import { Link } from 'react-router-dom'

const WareHouseClothingDetail = ({ clothing: { id, image, title, price, available } }) => {
  return (
    <div className="grid grid-cols-3">
      <img src={image} alt={title + price} className="w-20 h-20 max-h-20 object-cover" />
      <div className="col-span-2">
        <div className="grid grid-cols-auto">
          <p><span className="font-bold">Título:</span>{title}</p>
          <p><span className="font-bold">Precio</span>{price}</p>
          <p>
            <span className="font-bold">Disponible:</span>
            {available ? 'Disponible' : 'No Disponible'}
          </p>
          <div className="flex justify-around">
            <Link to={`/warehouse/edit/${id}`}>Editar</Link>
            <Link to={`/warehouse/delete/${id}`}>Eliminar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WareHouseClothingDetail
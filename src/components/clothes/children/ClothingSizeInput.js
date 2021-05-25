import { useEffect, useState } from "react"
import { PlusIcon, XIcon } from "@heroicons/react/outline"


const ClothingSizeInput = ({ handleChangeSize }) => {
  const [sizes, setSizes] = useState({
    newSize: '',
    list: []
  })

  const handleChange = ({target: { name, value }}) =>
    setSizes({...sizes, [name]: value})

  useEffect(() => {
    handleChangeSize(sizes)
  }, [sizes])

  return (
    <div>
      <div className="flex">
        <input
          className="form-control flex-grow"
          name="newSize"
          type="text"
          placeholder="sizes"
          value={sizes.newSize}
          onChange={handleChange}
        />
        <div
          className="bg-red-600 p-8"
          onClick={()=> setSizes({...sizes, list: [...sizes.list, sizes.newSize]})}
        >
          <PlusIcon className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {
          sizes.list.map(size => (
            <div className="bg-gray-200 p-4 relative">
              <span className="overflow-ellipsis">{size}</span>
              <XIcon
                className="absolute top-0 right-0 w-6 h-6 text-white bg-opacity-50 bg-black cursor-pointer rounded-bl-lg rounded-tr-lg"
                onClick={() => {
                  setSizes({...sizes, list: [...sizes.list.filter(s=>s!==size)]})
                }}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ClothingSizeInput
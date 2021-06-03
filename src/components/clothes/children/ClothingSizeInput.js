import { PlusIcon, XIcon } from "@heroicons/react/outline"


const ClothingSizeInput = ({
  onChange,
  handleChangeSize,
  handleDeleteSize,
  sizes,
  sizeField
}) => {
  return (
    <div>
      <div className="flex">
        <input
          className="form-control flex-grow"
          name="sizeField"
          type="text"
          placeholder="sizes"
          value={sizeField}
          onChange={onChange}
        />
        <div
          className="bg-red-600 p-8"
          // onClick={()=> setSizes({...sizes, list: [...sizes.list, form.sizeField]})}
          onClick={() => handleChangeSize(sizeField)}
        >
          <PlusIcon className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {
          sizes && sizes.map((size, i) => (
            <div className="bg-gray-200 p-4 relative" key={i}>
              <span className="overflow-ellipsis">{size}</span>
              <XIcon
                className="absolute top-0 right-0 w-6 h-6 text-white bg-opacity-50 bg-black cursor-pointer rounded-bl-lg rounded-tr-lg"
                // onClick={() => {
                //   setSizes({...sizes, list: [...sizes.list.filter(s=>s!==size)]})
                // }}
                onClick={() => handleDeleteSize(size)}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ClothingSizeInput
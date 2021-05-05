import { PhotographIcon } from "@heroicons/react/outline"

const Clothing = ({ clothing }) => (
  <div className="flex flex-col align-middle text-center shadow-md m-2 md:m-4">
    {
      clothing.image
        ? <img src={clothing.image}
            alt={`${clothing.category} of tiendi shop`}
            className="object-contain max-h-60"
          />
        : <PhotographIcon className="h-1/2 w-1/2 text-gray-300" />
    }
    <p className="text-left">{clothing.category}</p>
    <div className="flex justify-between">
      <p>{clothing.title}</p>
      <p>$ {clothing.price}</p>
    </div>
    <div dangerouslySetInnerHTML={{__html: clothing.details}}>
      
    </div>
  </div>
)

export default Clothing
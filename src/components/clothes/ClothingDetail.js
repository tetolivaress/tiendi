import { PhotographIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useFirestoreConnect } from "react-redux-firebase"

const Clothing = ({ clothing }) =>{
  
  useFirestoreConnect([
    { collection: 'tiendicategories' }
  ])

  const categories = useSelector(({ firestore }) => firestore.ordered.tiendicategories)
  const [category, setCategory] = useState({name: ''})

  useEffect(()=>{
    const category = categories && categories.find(category => category.id === clothing.category)
    setCategory(category)
  },[categories, clothing])

  return (
    <div className="flex flex-col align-middle text-center shadow-md">
      {
        clothing.image
          ? <img src={clothing.image}
              alt={`${clothing.category} of tiendi shop`}
              className="object-contain max-h-60"
            />
          : <PhotographIcon className="h-1/2 w-1/2 text-gray-300" />
      }
      <p className="text-left">{category && category.name || '' }</p>
      <div className="flex justify-between">
        <p className="text-base">{clothing.title}</p>
        <p>$ {clothing.price}</p>
      </div>
      <div dangerouslySetInnerHTML={{__html: clothing.details}}>
        
      </div>
    </div>
  )
}
export default Clothing
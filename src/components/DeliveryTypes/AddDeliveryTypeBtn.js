import { PlusIcon } from '@heroicons/react/solid'

const AddLocationBtn = () => {
  return ( 
    <div className="fixed bottom-8 right-8 p-6 sm:p-3 bg-blue-800 rounded-full">
      <PlusIcon className="w-8 h-8 sm:w-4 sm:h-4 text-white" />
    </div>
  )
}
 
export default AddLocationBtn
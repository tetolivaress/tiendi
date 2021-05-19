import { PlusIcon } from '@heroicons/react/solid'

const AddLocationBtn = () => {
  return ( 
    <div className="fixed bottom-8 right-8 p-6 md:p-3 bg-blue-800 rounded-full">
      <PlusIcon className="w-8 h-8 md:w-4 md:h-4 text-white" />
    </div>
  )
}
 
export default AddLocationBtn;
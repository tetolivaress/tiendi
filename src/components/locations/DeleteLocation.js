import { useHistory } from 'react-router-dom'
import DeleteModal from '@components/shared/Modal'
const DeleteLocation = ({ isOpen }) => {
  const history = useHistory()
  const handleCloseModal = () => {
    history.push('/backoffice/locations')
  }
  return (
    <>
      <DeleteModal isOpen={isOpen}>
        <div className="flex flex-col justify-center h-full text-center">
          <span className="mb-6 font-bold text-2xl">¿Estás seguro de borrar este lugar?</span>
          <div className="flex justify-center">
            <button className="px-8 py-2 rounded-lg mx-4 bg-green-600 text-white font-bold">Si</button>
            <button onClick={handleCloseModal} className="px-8 py-2 rounded-lg bg-red-600 text-white font-bold">No</button>
          </div>
        </div>
      </DeleteModal>
    </>
  )
}

export default DeleteLocation
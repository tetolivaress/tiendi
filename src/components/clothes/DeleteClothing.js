import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import DeleteModal from '@components/shared/Modal'
import { deleteClothing } from '@actions/clothes'

const DeleteClothing = ({ isOpen }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()

  const handleCloseModal = () => {
    history.push('/warehouse')
  }

  const handleDeleteClothing = async () => {
    console.log('About to delete clothing: ' + id)
    await dispatch(deleteClothing(id))
    history.push('/warehouse')
  }
  return (
    <>
      <DeleteModal isOpen={isOpen}>
        <div className="flex flex-col justify-center h-full text-center">
          <span className="mb-6 font-bold text-2xl">¿Estás seguro de borrar esta ropa?</span>
          <div className="flex justify-center">
            <button
              className="px-8 py-2 rounded-lg mx-4 bg-green-600 text-white font-bold"
              onClick={handleDeleteClothing}
            >Si
            </button>
            <button
              className="px-8 py-2 rounded-lg bg-red-600 text-white font-bold"
              onClick={handleCloseModal}
            >No
            </button>
          </div>
        </div>
      </DeleteModal>
    </>
  )
}

export default DeleteClothing
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import DeleteModal from '@components/shared/Modal'
import { deleteLocation } from '@actions/locations'

const DeleteLocation = ({ isOpen }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()

  const handleCloseModal = () => {
    history.push('/backoffice/locations')
  }

  const handleDeleteLocation = async () => {
    console.log('About to delete location: ' + id)
    await dispatch(deleteLocation(id))
    history.push('/backoffice/locations')
  }
  return (
    <>
      <DeleteModal isOpen={isOpen}>
        <div className="flex flex-col justify-center h-full text-center">
          <span className="mb-6 font-bold text-2xl">¿Estás seguro de borrar este lugar?</span>
          <div className="flex justify-center">
            <button
              className="px-8 py-2 rounded-lg mx-4 bg-green-600 text-white font-bold"
              onClick={handleDeleteLocation}
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

export default DeleteLocation
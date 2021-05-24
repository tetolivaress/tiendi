import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { useFirestore } from 'react-redux-firebase'
import DeleteModal from '@components/shared/Modal'
import { deleteCategory } from '@actions/categories'

const DeleteCategory = ({ isOpen }) => {
  const history = useHistory()
  const firestore = useFirestore()
  const dispatch = useDispatch()
  const { id } = useParams()

  const handleCloseModal = () => {
    history.push('/backoffice/categories')
  }

  const handleDeleteCategory = async () => {
    console.log('About to delete category: ' + id)
    await dispatch(deleteCategory(id))
    history.push('/backoffice/categories')
  }
  return (
    <>
      <DeleteModal isOpen={isOpen}>
        <div className="flex flex-col justify-center h-full text-center">
          <span className="mb-6 font-bold text-2xl">¿Estás seguro de borrar esta categoría?</span>
          <div className="flex justify-center">
            <button
              className="px-8 py-2 rounded-lg mx-4 bg-green-600 text-white font-bold"
              onClick={handleDeleteCategory}
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

export default DeleteCategory
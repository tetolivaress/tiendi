import { showLoading, hideLoading } from '@actions/loading'

const collectionName = 'tiendicategories'

const getCategories = () => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const categoriesResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .get()
    dispatch(hideLoading())
    return categoriesResponse
  }
}

const getCategory = (id) => {
  return async (dispatch, getState, getFirebase) => {
    return await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .get()
  }
}

const addCategory = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    return await getFirebase()
      .firestore()
      .collection(collectionName)
      .add({...payload})
  }
}

const updateCategory = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    return await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(payload.id)
      .update({
        name: payload.name,
        order: payload.order,
        image: payload.image
      })
  }
}

const deleteCategory = (id) => {
  return async (dispatch, getState, getFirebase) => {
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .delete()
  }
}

export {
  addCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory
}

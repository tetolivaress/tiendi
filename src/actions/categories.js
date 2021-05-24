import { showLoading, hideLoading } from '@actions/loading'
import { getClothes } from '@actions/clothes'

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
    dispatch(showLoading())
    const categoryResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .get()
    dispatch(hideLoading())
    return categoryResponse
  }
}

const addCategory = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .add({...payload})
    dispatch(hideLoading())
  }
}

const updateCategory = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(payload.id)
      .update({
        name: payload.name,
        order: payload.order,
        image: payload.image
      })
    dispatch(hideLoading())
  }
}

const deleteCategory = (id) => {
  return async (dispatch, getState, getFirebase) => {
    try {
      dispatch(showLoading())
      const clothes = await dispatch(getClothes(id))
      if (clothes.docs.length)
        console.info('You can only delete Empty Categories');
      await getFirebase()
        .firestore()
        .collection(collectionName)
        .doc(id)
        .delete()
      dispatch(hideLoading())
    } catch (error) {
      console.error(error)
    }
  }
}

export {
  addCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory
}

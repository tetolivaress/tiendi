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
    try {
      const clothes = await dispatch(getClothes(id))
      if (clothes.docs.length)
        console.info('You can only delete Empty Categories');
      await getFirebase()
        .firestore()
        .collection(collectionName)
        .doc(id)
        .delete()
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

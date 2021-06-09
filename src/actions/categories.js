import { showLoading, hideLoading } from '@actions/loading'
import { getClothes } from '@actions/clothes'
import { getFirebase } from 'react-redux-firebase'
import slugify from '@utils/Slugify'

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
    const storageRef = await getFirebase().storage()
      .ref(`tiendiImages/categories/${slugify(payload.name)}`)
    const task = await storageRef.putString(payload.image, 'data_url')
    const imageUrl = await task.task.snapshot.ref.getDownloadURL()
    await getFirebase().firestore().collection('tiendicategories').add({
      name: payload.name,
      image: imageUrl || '',
      order: payload.order
    })

    dispatch(hideLoading())
  }
}

const updateCategory = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const storageRef = await getFirebase().storage()
      .ref(`tiendiImages/categories/${slugify(payload.name)}`)
    const task = await storageRef.putString(payload.image, 'data_url')
    const imageUrl = await task.task.snapshot.ref.getDownloadURL()
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(payload.id)
      .update({
        name: payload.name,
        order: payload.order,
        image: imageUrl
      })
    dispatch(hideLoading())
  }
}

const deleteCategory = (id) => {
  return async (dispatch, getState, getFirebase) => {
    try {
      dispatch(showLoading())
      const clothes = await dispatch(getClothes(id))
      if (!clothes.docs.length)
        return await getFirebase()
          .firestore()
          .collection(collectionName)
          .doc(id)
          .delete()
      console.log('You can only delete empty categories')
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

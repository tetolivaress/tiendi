import { showLoading, hideLoading } from '@actions/loading'

const collectionName = 'clothes'

const getClothes = (categoryId) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const clothesResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .where('categoryId', '==', categoryId)
      .get()
    dispatch(hideLoading())
    return clothesResponse
  }
}

const getClothing = (id) => {
  return async (dispatch, getState, getFirebase) => {
    return await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .get()
  }
}

const addClothes = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    return await getFirebase()
      .firestore()
      .collection(collectionName)
      .add(payload)
  }
}

const updateClothes = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    return await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(payload.id)
      .update({
        name: payload.name
      })
  }
}

const deleteClothes = (id) => {
  return async (dispatch, getState, getFirebase) => {
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .delete()
  }
}

export {
  addClothes,
  deleteClothes,
  getClothes,
  getClothing,
  updateClothes
}

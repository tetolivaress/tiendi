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
    // dispatch({ type: 'LOAD_CLOTHES', payload: 
    //   {
    //     categoryId: categoryId,
    //     docs: clothesResponse.docs
    //   }
    // })
    dispatch(hideLoading())
    return clothesResponse
  }
}

const getAllClothes = () => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const clothesResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .limit(5)
      .get()
    dispatch({ type: 'LOAD_CLOTHES', payload: clothesResponse.docs })
    dispatch(hideLoading())
    return clothesResponse
  }
}

const getClothing = (id) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const clothingResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .get()
    dispatch(hideLoading())
    return clothingResponse
  }
}

const addClothes = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .add(payload)
    dispatch(hideLoading())
  }
}

const updateClothes = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(hideLoading())
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(payload.id)
      .update({
        title: payload.title,
        price: payload.price,
        image: payload.image,
        categoryId: payload.categoryId,
        description: payload.description,
        details: payload.details,
        available: payload.available,
        discount: payload.discount,
        colors: payload.colors,
        sizes: payload.sizes
      })
    dispatch(hideLoading())
  }
}

const deleteClothes = (id) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(hideLoading())
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .delete()
    dispatch(hideLoading())
  }
}

export {
  addClothes,
  deleteClothes,
  getClothes,
  getAllClothes,
  getClothing,
  updateClothes
}

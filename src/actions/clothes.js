import { showLoading, hideLoading } from '@actions/loading'
import slugify from '@utils/Slugify'

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
      // .limit(5)
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
    const timestamp = getFirebase().firestore.FieldValue.serverTimestamp()
    dispatch(showLoading())
    let clothingImages = []
    await payload.images.forEach(async (image, index) => {
      let storageRef = await getFirebase().storage()
      .ref(`tiendiImages/clothes/${slugify(payload.title+index)}`)
      let task = await storageRef.putString(image, 'data_url')
      clothingImages.push(await task.task.snapshot.ref.getDownloadURL())
      // clothingImages.push(url)
    })
    console.log(clothingImages)
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .add({
        title: payload.title,
        price: payload.price,
        images: clothingImages,
        categoryId: payload.categoryId,
        description: payload.description,
        details: payload.details,
        available: payload.available,
        discount: payload.discount,
        colors: payload.colors,
        sizes: payload.sizes,
        createdAt: timestamp,
        updatedAt: null
      })
    dispatch(hideLoading())
  }
}

const updateClothing = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    const timestamp = await getFirebase().firestore.FieldValue.serverTimestamp()
    dispatch(showLoading())
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
        sizes: payload.sizes,
        updatedAt: timestamp
      })
    dispatch(hideLoading())
  }
}

const deleteClothing = (id) => {
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
  deleteClothing,
  getClothes,
  getAllClothes,
  getClothing,
  updateClothing
}

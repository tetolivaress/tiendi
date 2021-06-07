import { showLoading, hideLoading } from '@actions/loading'

const collectionName = 'deliveries'

const getDeliveryTypes = () => {
  console.log('Loading delivery types')
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const deliveryTypesResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .get()
    dispatch(hideLoading())
    return deliveryTypesResponse
  }
}

const getDeliveryType = (id) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const deliveryTypeResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .get()
    dispatch(hideLoading())
    return deliveryTypeResponse
  }
}

const addDeliveryType = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .add({...payload})
    dispatch(hideLoading())
  }
}

const updateDeliveryType = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(payload.id)
      .update({
        name: payload.name
      })
    dispatch(hideLoading())
  }
}

const deleteDeliveryType = (id) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .delete()
    dispatch(hideLoading())
  }
}

export {
  addDeliveryType,
  deleteDeliveryType,
  getDeliveryTypes,
  getDeliveryType,
  updateDeliveryType
}

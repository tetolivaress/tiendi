import { showLoading, hideLoading } from '@actions/loading'

const collectionName = 'locations'

const getLocations = () => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const locationsResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .get()
      dispatch({ type: 'LOAD_LOCATIONS', payload: locationsResponse.docs })
    dispatch(hideLoading())
    return locationsResponse
  }
}

const getLocation = (id) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const locationResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .get()
    dispatch(hideLoading())
    return locationResponse
  }
}

const addLocation = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const timestamp = getFirebase().firestore.FieldValue.serverTimestamp()
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .add({
        ...payload,
        createdAt: timestamp
      })
    dispatch(hideLoading())
  }
}

const updateLocation = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    await getFirebase()
      .firestore()
      .collection('locations')
      .doc(payload.id)
      .update({
        name: payload.name,
        updatedAt: new Date()
      })
    dispatch(hideLoading())
  }
}

const deleteLocation = (id) => {
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
  addLocation,
  deleteLocation,
  getLocations,
  getLocation,
  updateLocation
}

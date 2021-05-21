import { showLoading, hideLoading } from '@actions/loading'

const collectionName = 'locations'

const getLocations = () => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const locationsResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .get()
    dispatch(hideLoading())
    return locationsResponse
  }
}

const getLocation = (id) => {
  return async (dispatch, getState, getFirebase) => {
    return await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .get()
  }
}

const addLocation = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    return await getFirebase()
      .firestore()
      .collection(collectionName)
      .add({...payload})
  }
}

const updateLocation = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    return await getFirebase()
      .firestore()
      .collection('locations')
      .doc(payload.id)
      .update({
        name: payload.name
      })
  }
}

const deleteLocation = (id) => {
  return async (dispatch, getState, getFirebase) => {
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .delete()
  }
}

export {
  addLocation,
  deleteLocation,
  getLocations,
  getLocation,
  updateLocation
}

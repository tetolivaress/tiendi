import { showLoading, hideLoading } from '@actions/loading'

const collectionName = 'days'

const getDays = () => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const daysResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .get()
    dispatch({ type: 'LOAD_DAYS', payload: daysResponse.docs })
    dispatch(hideLoading())
    return daysResponse
  }
}

const getDay = (id) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const dayResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(id)
      .get()
    dispatch(hideLoading())
    return dayResponse
  }
}

const addDay = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    const timestamp = getFirebase().firestore.FieldValue.serverTimestamp()
    dispatch(showLoading())
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .add({...payload, createdAt: timestamp})
    dispatch(hideLoading())
  }
}

const updateDay = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    const timestamp = await getFirebase().firestore.FieldValue.serverTimestamp()
    dispatch(showLoading())
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .doc(payload.id)
      .update({
        name: payload.name,
        updatedAt: timestamp
      })
    dispatch(hideLoading())
  }
}

const deleteDay = (id) => {
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
  addDay,
  deleteDay,
  getDays,
  getDay,
  updateDay
}

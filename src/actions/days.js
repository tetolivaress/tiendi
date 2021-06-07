import { showLoading, hideLoading } from '@actions/loading'

const collectionName = 'days'

const getDays = () => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const daysResponse = await getFirebase()
      .firestore()
      .collection(collectionName)
      .get()
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
    dispatch(showLoading())
    await getFirebase()
      .firestore()
      .collection(collectionName)
      .add({...payload})
    dispatch(hideLoading())
  }
}

const updateDay = (payload) => {
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

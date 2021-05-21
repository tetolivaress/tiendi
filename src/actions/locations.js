const addLocation = (payload) => {
  console.log(payload)
  return async (dispatch, getState, getFirebase) => {
    // dispatch(showLoading())
    await getFirebase()
      .firestore()
      .collection('locations')
      .add({...payload})
    // dispatch(hideLoading())
  }
}

export {
  addLocation
}

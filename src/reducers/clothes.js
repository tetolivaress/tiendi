const clothesReducer = (state = { clothes: [] }, { type, payload }) => {
  switch (type) {
    case 'LOAD_CLOTHES':
      console.log(payload)
      // return {
      //   ...state,
      //   clothes: [...state.clothes, clothes]
      // }
    default:
      return state
  }
}

export default clothesReducer
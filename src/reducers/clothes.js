const clothesReducer = (state = { clothes: [] }, { type, payload }) => {
  switch (type) {
    case 'LOAD_CLOTHES':
      const clothesList = payload.map(clothing => { return {...clothing.data(), id: clothing.id} })
      console.log(clothesList)
      return {
        ...state,
        clothes: [...state.clothes, ...clothesList]
      }
    default:
      return state
  }
}

export default clothesReducer
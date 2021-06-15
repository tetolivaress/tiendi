const clothesReducer = (state = { clothes: [] }, { type, payload }) => {
  switch (type) {
    case 'LOAD_CLOTHES':
      const clothesList = payload.map(clothing => {
        let clothingData = clothing.data()
        clothingData.createdAt =
          clothingData.createdAt &&
          clothingData.createdAt.toDate()
        clothingData.updatedAt =
          clothingData.updatedAt &&
          clothingData.updatedAt.toDate()
        return {...clothing.data(), id: clothing.id} }
      )
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
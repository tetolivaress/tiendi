const categories = (state = null, { type, payload }) => {
  switch (type) {
    case 'GET_CLOTHES':
      return {
        ...state,
        clothes: payload
      }
    case 'ADD_CLOTHING_IMAGE':
      return {
        ...state,
        clothingImage: [...state.clothes, payload]
      }
    
    default:
      break;
  }
}
const deliveryTypesReducer = (state = { deliveryTypes: [] }, { type, payload }) => {
  switch (type) {
    case 'LOAD_DELIVERY_TYPES':
      const deliveryTypesList = payload.map(deliveryType => { return {...deliveryType.data(), id: deliveryType.id} })
      return {
        ...state,
        deliveryTypes: [...state.deliveryTypes, ...deliveryTypesList]
      }
    default:
      return state
  }
}

export default deliveryTypesReducer
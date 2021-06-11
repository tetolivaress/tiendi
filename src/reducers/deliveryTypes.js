const deliveryTypesReducer = (state = { deliveryTypes: [] }, { type, payload }) => {
  switch (type) {
    case 'LOAD_DELIVERY_TYPES':
      const deliveryTypesList = payload.map(deliveryType => {
        let deliveryTypeData = deliveryType.data()
        deliveryTypeData.createdAt =
          deliveryTypeData.createdAt &&
          deliveryTypeData.createdAt.toDate()
        deliveryTypeData.updatedAt =
          deliveryTypeData.createdAt &&
          deliveryTypeData.updatedAt.toDate()
        return {...deliveryType.data(), id: deliveryType.id}
      })
      return {
        ...state,
        deliveryTypes: [...state.deliveryTypes, ...deliveryTypesList]
      }
    default:
      return state
  }
}

export default deliveryTypesReducer
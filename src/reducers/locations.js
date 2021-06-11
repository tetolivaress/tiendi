const locationsReducer = (state = { locations: [] }, { type, payload }) => {
  switch (type) {
    case 'LOAD_LOCATIONS':
      const locationsList = payload.map(location => {
          const locationData = location.data()
          return {
            id: location.id,
            name: locationData.name,
            createdAt: locationData.createdAt && locationData.createdAt.toDate().toString(),
            updatedAt: locationData.updatedAt && locationData.updatedAt.toDate().toString()
          }
        }
      )
      console.log(locationsList)
      return {
        ...state,
        locations: [...state.locations, ...locationsList]
      }
    default:
      return state
  }
}

export default locationsReducer
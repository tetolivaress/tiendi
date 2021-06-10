const locationsReducer = (state = { locations: [] }, { type, payload }) => {
  switch (type) {
    case 'LOAD_LOCATIONS':
      const locationsList = payload.map(location => { return {...location.data(), id: location.id} })
      return {
        ...state,
        locations: [...state.locations, ...locationsList]
      }
    default:
      return state
  }
}

export default locationsReducer
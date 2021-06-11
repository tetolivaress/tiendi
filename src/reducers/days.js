const daysReducer = (state = { days: [] }, { type, payload }) => {
  switch (type) {
    case 'LOAD_DAYS':
      const daysList = payload.map(day => {
        let dayData = day.data()
        dayData.createdAt =
          dayData.createdAt &&
          dayData.createdAt.toDate()
        dayData.updatedAt =
          dayData.createdAt &&
          dayData.updatedAt.toDate()
        return {...day.data(), id: day.id} }
      )
      return {
        ...state,
        days: [...state.days, ...daysList]
      }
    default:
      return state
  }
}

export default daysReducer
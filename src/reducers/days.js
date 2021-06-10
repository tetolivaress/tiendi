const daysReducer = (state = { days: [] }, { type, payload }) => {
  switch (type) {
    case 'LOAD_DAYS':
      const daysList = payload.map(day => { return {...day.data(), id: day.id} })
      return {
        ...state,
        days: [...state.days, ...daysList]
      }
    default:
      return state
  }
}

export default daysReducer
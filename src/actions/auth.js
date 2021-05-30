const auth = (state = null, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        loggedIn: payload.user
      }
    default:
      break;
  }
}
function loading(state = false, { type }) {
  switch (type) {
    case 'SHOW_LOADING': {
      return true
    }
    case 'HIDE_LOADING': {
      return false
    }
    default:
      return state
  }
}

export default loading
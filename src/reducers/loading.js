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

const showLoading = () => ({
  type: 'SHOW_LOADING'
})

const hideLoading = () => ({
  type: 'HIDE_LOADING'
})

export default loading
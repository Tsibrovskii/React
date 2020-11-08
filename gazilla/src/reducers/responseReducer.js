export default (state = null, action) => {
  switch (action.type) {
    case 'RESPONSE':
      return { ...state, response: action.payload }
    default:
      return state
  }
};
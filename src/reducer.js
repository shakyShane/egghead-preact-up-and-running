export default function (state, action) {
  switch(action.type) {
    case 'USER_FETCH':
      return {
        user: null,
        loading: true
      }
    case 'USER_FULFILLED':
      return {
        user: action.payload,
        loading: false
      }
    default: return state;
  }
}
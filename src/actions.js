export function fetchUser (username) {
  return function(dispatch) {
    dispatch({type: 'USER_FETCH'});
    fetch(`https://api.github.com/users/${username}`)
        .then(resp => resp.json())
        .then(user => {
          dispatch({type: 'USER_FULFILLED', payload: user});
        })
        .catch(err => console.error(err));
  }
}
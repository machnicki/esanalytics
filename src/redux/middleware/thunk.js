export default function thunkMiddleware({ dispatch, getState }) {
  return next => action => {
    if (isFunction(action)) {
      return action({ dispatch, getState })
    } else if (isPromise(action.promise)) {
      next({ type: `${action.type}_STARTED`, payload: action.payload })
      return action.promise
        .then(
          payload => next({
            payload,
            type: `${action.type}_SUCCESS`,
            startedPayload: action.payload,
          }),
          error => next({
            error,
            type: `${action.type}_FAILED`,
            startedPayload: action.payload,
          })
        )
        .catch(error => {
          console.log('thunk Middleware error, ', error)
          next({ error, type: `${action.type}_ERROR` })
        })
    }

    return next(action)
  }
}

function isPromise(action) {
  return action && typeof action.then === 'function';
}

function isFunction(action) {
  return typeof action === 'function'
}

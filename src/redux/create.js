import { createStore as _createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import { persistState } from 'redux-devtools'
import thunk from './middleware/thunk'

export default function createStore(initialState = {}) {
  const middleware = [thunk]

  let finalCreateStore;

  if (window.devToolsExtension) {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore)
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore)
  }

  const store = finalCreateStore(reducer, initialState)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(reducer)
    })
  }

  return store
}

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './redux/create'
import App from 'containers/app'

const dest = document.getElementById('app')
const store = createStore()

ReactDOM.render((
  <Provider store={ store }>
    <App />
  </Provider>
), dest)

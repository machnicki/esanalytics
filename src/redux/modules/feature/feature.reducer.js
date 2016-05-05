import Immutable from 'immutable'
import actionTypes from './feature.action-types'

const { GET_DATA_STARTED, GET_DATA_SUCCESS, GET_DATA_FAILED, SET_FEATURE } = actionTypes

function getInitialState() {
  return Immutable.fromJS({
    isFetching: false,
    error: '',
    activeFeatureNo: 0,
  })
}

export default function featureReducer(state = getInitialState(), action = { type: undefined }) {
  switch (action.type) {
    case GET_DATA_STARTED:
      return state.set('isFetching', true)
    case GET_DATA_SUCCESS:
      return state.merge({
        isFetching: false,
        error: '',
        activeFeatureNo: action.payload.feature,
      })
    case GET_DATA_FAILED:
      return state.merge({
        isFetching: false,
        error: 'Problem with request',
      })
    case SET_FEATURE:
      return state.set('activeFeatureNo', action.payload.feature)
    default:
      return state
  }
}

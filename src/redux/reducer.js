import { combineReducers } from 'redux'
import featureReducer from './modules/feature/feature.reducer'

export default combineReducers({
  feature: featureReducer,
})

import Immutable from 'immutable'
import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'
chai.use(chaiSubset)
import actionTypes from 'reduxModules/feature/feature.action-types'
import featureReducer from 'reduxModules/feature/feature.reducer'

const { GET_DATA_STARTED, GET_DATA_SUCCESS, GET_DATA_FAILED, SET_FEATURE } = actionTypes

describe('newOrderReducer', () => {
  const initialState = {
    isFetching: false,
    error: '',
    activeFeatureNo: 0,
  }

  it('handles action with unknown type', () => {
    expect(featureReducer(undefined, {}).toJS()).to.deep.equal(initialState)
  })

  it('handles SET_FEATURE action type', () => {
    expect(featureReducer(Immutable.fromJS(initialState), {
      type: SET_FEATURE,
      payload: { feature: 2 },
    }).toJS()).to.deep.equal({ ...initialState, activeFeatureNo: 2 })
  })

  describe('GET_DATA', () => {
    it('handles started type', () => {
      expect(featureReducer(Immutable.fromJS(initialState), {
        type: GET_DATA_STARTED,
      }).toJS()).to.deep.equal({ ...initialState, isFetching: true })
    })

    it('handles success type', () => {
      expect(featureReducer(Immutable.fromJS(initialState), {
        type: GET_DATA_SUCCESS,
        payload: { feature: 6 },
      }).toJS()).to.deep.equal({ ...initialState, activeFeatureNo: 6 })
    })

    it('handles failed type', () => {
      const { error, ...restState } = initialState

      expect(featureReducer(Immutable.fromJS(initialState), {
        type: GET_DATA_FAILED,
      }).toJS()).to.containSubset({ ...restState })

      expect(featureReducer(Immutable.fromJS(initialState), {
        type: GET_DATA_FAILED,
      }).toJS().error).to.not.equal('')
    })
  })
})

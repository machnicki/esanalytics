import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'
chai.use(chaiSubset)
import sinon from 'sinon'
import fetchMock from 'fetch-mock'
import {
  getData, setFeature,
} from 'reduxModules/feature/feature.actions'
import actionTypes from 'reduxModules/feature/feature.action-types'

const { GET_DATA, SET_FEATURE } = actionTypes

describe('feature actions', () => {
  it('getData has correct response', () => {
    fetchMock.mock('^features', 201)
    const dispatch = sinon.spy()
    const action = getData()

    action({ dispatch })
    expect(dispatch.lastCall.args[0]).to.containSubset({ type: GET_DATA })
  })

  it('setFeature has correct type', () => {
    const action = setFeature()
    expect(action.type).to.equal(SET_FEATURE)
  })
})

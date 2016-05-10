import { expect } from 'chai'
import actionTypes from 'reduxModules/feature/feature.action-types'

describe('Orders Actions Types', () => {
  it('should have all action types', () => {
    expect(actionTypes.GET_DATA).to.exist
    expect(actionTypes.GET_DATA_STARTED).to.exist
    expect(actionTypes.GET_DATA_SUCCESS).to.exist
    expect(actionTypes.GET_DATA_FAILED).to.exist
    expect(actionTypes.SET_FEATURE).to.exist
  })

  it('action types should be frozen - immutable', () => {
    expect(actionTypes).to.not.be.extensible
  });
})

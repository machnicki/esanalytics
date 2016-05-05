import actionTypes from './feature.action-types'

const { GET_DATA, SET_FEATURE } = actionTypes

export function getData(payload = {}) {
  return ({ dispatch }) => {
    const action = {
      type: GET_DATA,
      promise: _getDataPromise(),
      payload,
    }
    return dispatch(action)
  }
}

export function setFeature(payload = {}) {
  return ({ type: SET_FEATURE, payload })
}

/**
 * @desc Get feature JSON by random
 * @returns Promise
 */
function _getDataPromise() {
  const randomNo = Math.floor(Math.random() * 3) // 0-2
  let featureJSONFileName

  switch (randomNo) {
    case 1:
      featureJSONFileName = 'feature-a'
      break
    case 2:
      featureJSONFileName = 'feature-b'
      break
    default:
      featureJSONFileName = 'no-feature'
  }

  return window.fetch(`features/${featureJSONFileName}.json`, {
    method: 'get',
  }).then(response => response.json())
}

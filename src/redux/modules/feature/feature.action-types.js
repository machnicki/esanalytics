import KeyMirror from 'keymirror'

const fetureActionTypes = new KeyMirror({
  GET_DATA: null,
  GET_DATA_STARTED: null,
  GET_DATA_SUCCESS: null,
  GET_DATA_FAILED: null,
  SET_FEATURE: null,
})

Object.freeze(fetureActionTypes)

export default fetureActionTypes

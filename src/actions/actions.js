import * as types from './ActionTypes'

export function formUpdate(data) {
  return {
    type: types.FORM_UPDATE,
    payload: data
  }
}

export function register(data) {
  return {
    type: types.REGISTER,
    payload: data
  }
}

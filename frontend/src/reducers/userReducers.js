import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTE_REQUEST,
  USER_REGISTE_SUCCESS,
  USER_REGISTE_FAIL,
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTE_REQUEST:
      return { loading: true }
    case USER_REGISTE_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

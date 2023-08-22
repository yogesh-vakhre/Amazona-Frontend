import {
  SIGN_IN_ERROR,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_OUT_ERROR,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
} from "../action-types/authActionTypes";
import { getUserInfo } from "../localStorage";

const initialState = {
  isSignedIn: getUserInfo() !== undefined ? true : false,
  user: getUserInfo() ?? {},
  error: "",
  loader: false,
  success: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_START:
      return { ...state, user: action.payload, loader: true };
    case SIGN_OUT_START:
      return { ...state, loader: true };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isSignedIn: true,
        loader: false,
        success: true,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: {},
        isSignedIn: false,
        error: "",
        loader: false,
        success: true,
      };
    case SIGN_IN_ERROR:
    case SIGN_OUT_ERROR:
      return {
        ...state,
        error: action.payload,
        loader: false,
        success: false,
      };
    default:
      return state;
  }
};
export default authReducer;

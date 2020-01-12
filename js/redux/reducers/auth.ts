import {
  Auth,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS
} from '../actions/auth';

export const initialState = {
  errorMessage: null,
  fullName: '',
  isAuthorizationPending: false,
  isAuthorized: false,
  userId: null,
} as IAuthState;

export default function auth(
  state = initialState as IAuthState,
  action: IAction<Auth>,
): IAuthState {
  switch (action.type) {
    case LOGIN: {
      return Object.assign({}, state, {
        isAuthorizationPending: true,
      });
    }

    case LOGIN_SUCCESS: {
      const {fullName, id} = action.payload as IAuthLoginSuccess;
      return Object.assign({}, state, {
        fullName,
        isAuthorizationPending: false,
        isAuthorized: true,
        userId: id,
      });
    }

    case LOGIN_ERROR: {
      const {message} = action.payload as IAuthLoginError;
      return Object.assign({}, state, {
        errorMessage: message,
        isAuthorizationPending: false,
        isAuthorized: false,
      });
    }

    case REGISTER: {
      const {fullName} = action.payload as IAuthRegister;
      return Object.assign({}, state, {
        errorMessage: null,
        fullName,
        isAuthorizationPending: true,
        isAuthorized: false,
        userId: null,
      });
    }

    case REGISTER_SUCCESS: {
      const {id} = action.payload as IAuthRegisterSuccess;
      return Object.assign({}, state, {
        errorMessage: null,
        isAuthorizationPending: false,
        isAuthorized: true,
        userId: id,
      });
    }

    case REGISTER_ERROR: {
      const {message} = action.payload as IAuthRegisterError;
      return Object.assign({}, state, {
        errorMessage: message,
        fullName: '',
        isAuthorizationPending: false,
        isAuthorized: false,
        userId: null,
      });
    }

    case LOGOUT: {
      return Object.assign({}, state, {
        errorMessage: null,
        fullName: '',
        isAuthorizationPending: false,
        isAuthorized: false,
        userId: null,
      });
    }

    default: {
      return state;
    }
  }
}

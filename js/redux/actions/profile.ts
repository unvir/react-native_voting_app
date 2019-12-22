const prefix = 'PROFILE_';

export type Profile = IAuthLogin | IAuthLoginSuccess | IAuthLoginError;

export const LOGIN = `${prefix}LOGIN`;
export const LOGIN_SUCCESS = `${prefix}LOGIN_SUCCESS`;
export const LOGIN_ERROR = `${prefix}LOGIN_ERROR`;
export const LOGOUT = `${prefix}LOGOUT`;

export const loginSuccess = ({fullName, id}: IAuthLoginSuccess) => ({
  payload: {
    fullName,
    id,
  },
  type: LOGIN_SUCCESS,
});

export const loginError = (message: string) => ({
  payload: {
    message,
  },
  type: LOGIN_ERROR,
});

export const login = () => ({
  payload: {},
  type: LOGIN,
});

export const logout = () => ({
  payload: {},
  type: LOGOUT,
});

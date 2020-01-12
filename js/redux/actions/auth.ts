const prefix = 'AUTH_';

export type Auth = IAuthLogin | IAuthLoginSuccess | IAuthLoginError |
    IAuthRegister | IAuthRegisterSuccess | IAuthRegisterError;

export const LOGIN = `${prefix}LOGIN`;
export const LOGIN_SUCCESS = `${prefix}LOGIN_SUCCESS`;
export const LOGIN_ERROR = `${prefix}LOGIN_ERROR`;
export const REGISTER = `${prefix}REGISTER`;
export const REGISTER_SUCCESS = `${prefix}REGISTER_SUCCESS`;
export const REGISTER_ERROR = `${prefix}REGISTER_ERROR`;
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

export const registerSuccess = ({id}: IAuthRegisterSuccess) => ({
  payload: {
    id,
  },
  type: REGISTER_SUCCESS,
});

export const registerError = (message: string) => ({
  payload: {
    message,
  },
  type: REGISTER_ERROR,
});

export const register = ({ username, password, fullName }: IAuthRegister) => ({
  payload: {
    fullName,
    password,
    username,
  },
  type: REGISTER,
});

export const logout = () => ({
  payload: {},
  type: LOGOUT,
});

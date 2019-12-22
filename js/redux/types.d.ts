interface IAction<T> {
  type: string;
  payload: T;
}

interface IGlobalState {
  auth: IAuthState;
}

interface IProfileState {
  featuredEvents: IEventsUserListData[];
}

interface IAuthState {
  errorMessage: string | null;
  fullName: string;
  isAuthorizationPending: boolean;
  isAuthorized: boolean;
  userId: number | null;
}

interface IAuthLoginSuccess {
  id: number;
  fullName: string;
}

interface IAuthLoginError {
  message: string;
}

interface IAuthLogin {
  username: string;
  password: string;
}

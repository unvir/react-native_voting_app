interface IAction<T> {
  type: string;
  payload: T;
}

interface IGlobalState {
  auth: IAuthState;
  profile: IProfileState;
  participants: IParticipantsState;
}

interface IParticipantsState {
  participants: IEventParticipantsList[];
  errorMessage: string;
  isParticipantsPending: boolean;
}

interface IParticipantsGetFromEvent {
  eventId: number;
}

interface IParticipantsGetFromEventError {
  message: string;
}

interface IProfileState {
  featuredEvents: IEventsUserList[];
  errorMessage: string;
  isFeaturedEventsPending: boolean;
}

interface IProfileGetEventError {
  message: string;
}

interface IProfileGetEvent {
  eventId: number;
}

interface IProfileGetFeaturedError {
  message: string;
}

interface IProfileGetFeatured {
  userId: number;
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

interface IAuthRegisterSuccess {
  id: number;
}

interface IAuthRegisterError {
  message: string;
}

interface IAuthRegister {
  username: string;
  password: string;
  fullName: string;
}
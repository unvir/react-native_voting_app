export const getErrorMessage = (state: IGlobalState) => state.auth.errorMessage;
export const getFullName = (state: IGlobalState) => state.auth.fullName;
export const getUserId = (state: IGlobalState) => state.auth.userId;
export const isAuthorizationPending = (state: IGlobalState) => state.auth.isAuthorizationPending;
export const isAuthorized = (state: IGlobalState) => state.auth.isAuthorized;

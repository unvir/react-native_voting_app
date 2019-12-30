const prefix = 'PROFILE_';

export type Profile = IProfileGetFeatured | IEventsUserListData | IProfileGetFeaturedError;

export const GET_FEATURED = `${prefix}GET_FEATURED`;
export const GET_FEATURED_SUCCESS = `${prefix}GET_FEATURED_SUCCESS`;
export const GET_FEATURED_ERROR = `${prefix}GET_FEATURED_ERROR`;

export const getFeaturedSuccess = (data: IEventsUserList[]) => ({
  payload: {
    data,
  },
  type: GET_FEATURED_SUCCESS,
});

export const getFeaturedError = (message: string) => ({
  payload: {
    message,
  },
  type: GET_FEATURED_ERROR,
});

export const getFeatured = () => ({
  payload: {},
  type: GET_FEATURED,
});

const prefix = 'PROFILE_';

export type Profile = IProfileGetFeatured | IEventsUserListData | IProfileGetFeaturedError |
    IEventsUserList | IProfileGetEventError | IProfileGetEvent;

export const GET_FEATURED = `${prefix}GET_FEATURED`;
export const GET_FEATURED_SUCCESS = `${prefix}GET_FEATURED_SUCCESS`;
export const GET_FEATURED_ERROR = `${prefix}GET_FEATURED_ERROR`;
export const GET_EVENT = `${prefix}GET_EVENT`;
export const GET_EVENT_SUCCESS = `${prefix}GET_EVENT_SUCCESS`;
export const GET_EVENT_ERROR = `${prefix}GET_EVENT_ERROR`;

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

export const getEventSuccess = (data: IEventsUserList) => ({
  payload: {
    data,
  },
  type: GET_EVENT_SUCCESS,
});

export const getEventError = (message: string) => ({
  payload: {
    message,
  },
  type: GET_EVENT_ERROR,
});

export const getEvent = () => ({
  payload: {},
  type: GET_EVENT,
});

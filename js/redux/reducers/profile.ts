import {
  GET_FEATURED,
  GET_FEATURED_ERROR,
  GET_FEATURED_SUCCESS,
  Profile,
} from '../actions/profile';

export const initialState = {
  errorMessage: '',
  featuredEvents: [],
  isFeaturedEventsPending: false,
} as IProfileState;

export default function profile(
  state = initialState as IProfileState,
  action: IAction<Profile>,
): IProfileState {
  switch (action.type) {
    case GET_FEATURED: {
      return Object.assign({}, state, {
        isFeaturedEventsPending: true,
      });
    }

    case GET_FEATURED_SUCCESS: {
      const {data} = action.payload as IEventsUserListData;
      return Object.assign({}, state, {
        featuredEvents: data,
        isFeaturedEventsPending: false,
      });
    }

    case GET_FEATURED_ERROR: {
      const {message} = action.payload as IProfileGetFeaturedError;
      return Object.assign({}, state, {
        errorMessage: message,
        isFeaturedEventsPending: false,
      });
    }

    default: {
      return state;
    }
  }
}

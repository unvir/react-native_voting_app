import {
  GET_PARTICIPANTS,
  GET_PARTICIPANTS_ERROR,
  GET_PARTICIPANTS_SUCCESS,
  Participants,
} from '../actions/participants';

export const initialState = {
  errorMessage: '',
  isParticipantsPending: false,
  participants: [],
} as IParticipantsState;

export default function participants(
  state = initialState as IParticipantsState,
  action: IAction<Participants>,
): IParticipantsState {
  switch (action.type) {
    case GET_PARTICIPANTS: {
      return Object.assign({}, state, {
        isParticipantsPending: true,
      });
    }

    case GET_PARTICIPANTS_SUCCESS: {
      const {data} = action.payload as IEventParticipantsListData;
      return Object.assign({}, state, {
        isParticipantsPending: false,
        participants: data,
      });
    }

    case GET_PARTICIPANTS_ERROR: {
      const {message} = action.payload as IProfileGetFeaturedError;
      return Object.assign({}, state, {
        errorMessage: message,
        isParticipantsPending: false,
      });
    }

    default: {
      return state;
    }
  }
}

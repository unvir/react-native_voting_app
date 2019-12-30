const prefix = 'PARTICIPANTS_';

export type Participants = IParticipantsGetFromEvent | IEventParticipantsListData | IParticipantsGetFromEventError;

export const GET_PARTICIPANTS = `${prefix}GET_PARTICIPANTS`;
export const GET_PARTICIPANTS_SUCCESS = `${prefix}GET_PARTICIPANTS_SUCCESS`;
export const GET_PARTICIPANTS_ERROR = `${prefix}GET_PARTICIPANTS_ERROR`;

export const getParticipantsSuccess = (data: IEventParticipantsList[]) => ({
  payload: {
    data,
  },
  type: GET_PARTICIPANTS_SUCCESS,
});

export const getParticipantsError = (message: string) => ({
  payload: {
    message,
  },
  type: GET_PARTICIPANTS_ERROR,
});

export const getParticipants = () => ({
  payload: {},
  type: GET_PARTICIPANTS,
});

import {NavigationInjectedProps} from 'react-navigation';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import ParticipantsAPI from '../../API/ParticipantsAPI';
import Event from './Event.component';

import * as participantsActions from '../../redux/actions/participants';
import * as authSelectors from '../../redux/selectors/auth';
import * as participantsSelectors from '../../redux/selectors/participants';

const mapStateToProps = (state: IGlobalState, {navigation}: NavigationInjectedProps) => ({
  errorMessage: participantsSelectors.getErrorMessage(state),
  isParticipantsPending: participantsSelectors.isParticipantsPending(state),
  navigation,
  participants: participantsSelectors.getParticipants(state),
  userId: authSelectors.getUserId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchParticipants: async (eventId: number): Promise<void> => {
    dispatch(participantsActions.getParticipants());

    try {
      const { data } = await ParticipantsAPI.getParticipants(eventId);
      dispatch(participantsActions.getParticipantsSuccess(data));
    } catch (error) {
      dispatch(participantsActions.getParticipantsError(error.message || error));
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Event);

import {connect} from 'react-redux';
import ListItemScoring from './ListItemScoring.component';

import * as authSelectors from '../../redux/selectors/auth';

const mapStateToProps = (state: IGlobalState, ownProps) => ({
  avatar: ownProps.avatar,
  fullName: ownProps.fullName,
  participantId: ownProps.id,
  userId: authSelectors.getUserId(state),
});

export default connect(
  mapStateToProps,
)(ListItemScoring);

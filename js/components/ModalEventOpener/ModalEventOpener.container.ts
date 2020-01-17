import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import EventsAPI from '../../API/EventsAPI';
import ModalEventOpener, {IModalEventOpenerProps} from './ModalEventOpener.component';

import NavigationService from '../../navigationService';
import * as authActions from '../../redux/actions/auth';
import * as profileActions from '../../redux/actions/profile';
import * as authSelectors from '../../redux/selectors/auth';
import * as profileSelectors from '../../redux/selectors/profile';

const mapStateToProps = (state: IGlobalState, ownProps: IModalEventOpenerProps) => ({
    visible: ownProps.visible,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchEvents: async (userId: number) => {
        dispatch(profileActions.getFeatured());

        try {
            const { data } = await EventsAPI.getFeaturedList(userId);
            dispatch(profileActions.getFeaturedSuccess(data));
        } catch (error) {
            dispatch(profileActions.getFeaturedError(error.message || error));
        }
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ModalEventOpener);

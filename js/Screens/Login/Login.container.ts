import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import AuthAPI from '../../API/AuthAPI';

import * as authActions from '../../redux/actions/auth';
import * as authSelectors from '../../redux/selectors/auth';
import Login from './Login.component';

const mapStateToProps = (state: IGlobalState) => ({
  errorMessage: authSelectors.getErrorMessage(state),
  isAuthorizationPending: authSelectors.isAuthorizationPending(state),
  isAuthorized: authSelectors.isAuthorized(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  makeLogin: async (username: string, password: string, successCallback?: () => {}) => {
    dispatch(authActions.login());

    try {
      const { data } = await AuthAPI.login(username, password);
      dispatch(authActions.loginSuccess(data));

      if (successCallback) {
        successCallback();
      }
    } catch (e) {
      dispatch(authActions.loginError(e.message || e));
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

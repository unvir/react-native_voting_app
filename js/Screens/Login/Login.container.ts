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
    } catch (error) {
      dispatch(authActions.loginError(error.message || error));
    }
  },
  makeRegistration: async (username: string, password: string, fullName: string, successCallback?: () => {}) => {
    dispatch(authActions.register({username, password, fullName}));

    try {
      const { data } = await AuthAPI.register(username, password, fullName);
      dispatch(authActions.registerSuccess(data));

      if (successCallback) {
        successCallback();
      }
    } catch (error) {
      dispatch(authActions.registerError(error.message || error));
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

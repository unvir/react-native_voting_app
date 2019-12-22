import {Root} from 'native-base';
import React from 'react';
import {Provider} from 'react-redux';
import NavigationService from './js/navigationService';
import AppNavigator from './routes';

import store from './js/redux/store';

export default function App() {
  return (
    <Root>
      <Provider store={store}>
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    </Root>
  );
}

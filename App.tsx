import React from 'react';
import AppNavigator from './routes';
import NavigationService from './js/navigationService';
import { Root } from 'native-base';

export default function App() {
  return (
    <Root>
      <AppNavigator ref={navigatorRef => {
                      NavigationService.setTopLevelNavigator(navigatorRef);
                    }} />
    </Root>
  );
};

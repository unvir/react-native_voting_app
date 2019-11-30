import { Root } from 'native-base';
import React from 'react';
import NavigationService from './js/navigationService';
import AppNavigator from './routes';

export default function App() {
  return (
    <Root>
      <AppNavigator ref={(navigatorRef) => {
                      NavigationService.setTopLevelNavigator(navigatorRef);
                    }} />
    </Root>
  );
}

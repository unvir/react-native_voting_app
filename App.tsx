import React from 'react';
import AppNavigator from './routes';
import NavigationService from './js/navigationService';

export default function App() {
  return (
    <AppNavigator ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                  }}
    />
  );
};

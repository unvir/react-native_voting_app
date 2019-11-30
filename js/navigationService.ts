import { NavigationActions, NavigationContainerComponent } from 'react-navigation';

// tslint:disable-next-line: variable-name
let _navigator: NavigationContainerComponent | null;

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent | null) {
    _navigator = navigatorRef;
}

function navigate(routeName: string, params?: object) {
    if (_navigator === null) {
        return;
    }

    _navigator.dispatch(
        NavigationActions.navigate({
            params,
            routeName,
        }),
    );
}

export default {
  navigate,
  setTopLevelNavigator,
};

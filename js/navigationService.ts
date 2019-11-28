import { NavigationActions, NavigationContainerComponent } from 'react-navigation';

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
            routeName,
            params,
        })
    );
}

function getParam(key: string, defaultValue?: any) {
    if (_navigator === null) {
        return;
    }

    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

export default {
  navigate,
  setTopLevelNavigator,
};
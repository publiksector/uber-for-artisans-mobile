import { DrawerActions, CommonActions, } from '@react-navigation/native';
import { NavigationActions } from '@react-navigation/compat';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{
                name: routeName,
                params,
            }],
        })
    );
}

function toggleDrawer(routeName, params) {
    _navigator.dispatch(
        DrawerActions.toggleDrawer()
    );
}

function goBack() {
    _navigator.dispatch(
        NavigationActions.back()
    );
}

const resetAction = (routeName) => CommonActions.reset({
    index: 0,
    routes: [{
        name: routeName,
    }],
});
// StackActions.reset({
//     index: 0,
//     actions: [NavigationActions.navigate({ routeName })],
// });

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    resetAction,
    toggleDrawer,
    goBack,
};
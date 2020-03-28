import * as userActions from './UserActions';
import * as loginActions from './LoginActions';
import * as registerActions from './RegisterActions';

export const InitializeApp = userActions.InitializeApp;
export const doLogin = loginActions.doLogin;
export const logout = userActions.logout;
export const doRegister = registerActions.doRegister;
export const verifyAccount = userActions.verify;
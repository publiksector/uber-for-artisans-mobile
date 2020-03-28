import {
    combineReducers
} from 'redux';
import login from './LoginReducer';
import register from './RegisterReducer';
import user from './UserReducer';
import socket from './SocketReducer';

const rootReducers = combineReducers({
    login,
    register,
    user,
    socket,
})

export default rootReducers;
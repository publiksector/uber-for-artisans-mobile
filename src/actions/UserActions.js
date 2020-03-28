import * as constants from '../constants/ActionTypes';
import {
    CALL_API,
    RSAA
} from 'redux-api-middleware';
import AsyncStorage from '@react-native-community/async-storage';
import config from '../config';
const BASE_URL = () => `${config.api.host}/api/user`;
import store from '../store/createStore';

export const InitializeApp = (token) => ({
    [RSAA]: {
        endpoint: `${BASE_URL()}/verify/token`,
        method: 'POST',
        types: [
            constants.INITIALIZE_APP,
            {
                type: constants.INITIALIZE_SUCCESS,
                payload: (action, state, response) => response.json().then(response => {
                    store.getState().socket.emit('Authorized', response);
                    return {
                        response
                    }
                })
            },
            {
                type: constants.INITIALIZE_FAILURE,
                meta: (action, state, res) => {
                    return {
                        error: res,
                        // message: res.message
                    };
                }
            }
        ],
        body: JSON.stringify(token),
        options: { timeout: 60000 },
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }
})

export const verify = (credentials) => ({
    [RSAA]: {
        endpoint: `${BASE_URL()}/verify`,
        method: 'POST',
        types: [
            constants.VERIFY_ACCOUNT,
            {
                type: constants.VERIFY_ACCOUNT_SUCCESS,
                payload: (action, state, response) => response.json().then(response => ({
                    response
                }))
            },
            {
                type: constants.VERIFY_ACCOUNT_FAILURE,
                meta: (action, state, res) => {
                    return {
                        status: res.status,
                        message: res.message
                    };
                }
            }
        ],
        body: JSON.stringify(credentials),
        options: { timeout: 60000 },
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }
})

export const logout = _ => {
    return (dispatch) => {
        dispatch({ type: constants.LOGOUT })
        AsyncStorage.clear((err) => {
            if (!err) {
                dispatch({ type: constants.LOGOUT, payload: 'logged-out' })
            }
        })
    }
}
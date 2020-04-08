import * as constants from '../constants/ActionTypes';
import {
    CALL_API,
    RSAA
} from 'redux-api-middleware';
import config from '../config';

export function inputNumber(number) {
    return (dispatch) => {
        dispatch({
            type: constants.INPUT_NUMBER,
            payload: number
        })
    }
}

export function validateMobile(countryCode) {
    return (dispatch, store) => {
        let number = store().register.mobile;
        if (!number.startsWith(234) && !number.startsWith('+234')) {
            number = '0' + number;
        }
        dispatch({
            type: constants.VALIDATE_NUMBER,
            payload: { phoneNumber: number, countryCode, }
        })
    }
}

export const generateOTP = data => ({
    [RSAA]: {
        endpoint: `${config.api.host}/api/user/register`,
        method: 'POST',
        types: [
            constants.GENERATE_OTP,
            {
                type: constants.GENERATE_OTP_SUCCESS,
                payload: (action, state, response) => response.json().then(response => ({
                    response
                }))
            },
            {
                type: constants.GENERATE_OTP_FAILURE,
                meta: (action, state, res) => {
                    return {
                        error: res
                    }
                }
            }
        ],
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }
});

export const verifyOTP = (data, token) => ({
    [RSAA]: {
        endpoint: `${config.api.host}/api/user/verify`,
        method: 'PUT',
        types: [
            constants.VERIFY_OTP,
            {
                type: constants.VERIFY_OTP_SUCCESS,
                payload: (action, state, response) => response.json().then(response => ({
                    response
                }))
            },
            {
                type: constants.VERIFY_OTP_FAILURE,
                meta: (action, state, res) => {
                    return {
                        error: res
                    }
                }
            }
        ],
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-access-token": token,
        },
        credentials: "same-origin"
    }
})

export const doRegister = (details, token) => ({
    [RSAA]: {
        endpoint: `${config.api.host}/api/user/complete_signup`,
        method: 'PUT',
        types: [
            constants.REGISTER,
            {
                type: constants.AUTH_USER_SUCCESS,
                payload: (action, state, response) => response.json().then(response => ({
                    response
                }))
            },
            {
                type: constants.REGISTER_FAILURE,
                meta: (action, state, res) => {
                    return {
                        status: res.status
                    };
                }
            }
        ],
        body: JSON.stringify(details),
        options: { timeout: 10000 },
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-access-token": token,
        },
        credentials: "same-origin"
    }
});

export function userDetails(details) {
    return (dispatch) => {
        dispatch({
            type: constants.USER_DETAILS,
            payload: details
        })
    }
}
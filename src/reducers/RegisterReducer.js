import * as constants from '../constants/ActionTypes';

const initialState = {
    credentials: {},
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case constants.REGISTER:
            return Object.assign({}, state, {
                isProcessing: true,
            })
        case constants.REGISTER_SUCCESS:
            return {
                ...state,
                isProcessing: false,
                created: true
            };
        case constants.REGISTER_FAILURE:
            return Object.assign({}, state, {
                error: `${(action.payload.response && action.payload.response.message) || (action.payload.message)}`,
                isProcessing: false,
                created: false,
            })
        case constants.INPUT_NUMBER:
            return {
                ...state,
                mobile: action.payload
            }
        case constants.VALIDATE_NUMBER:
            return {
                ...state,
                validate: true,
                mobile: action.payload.phoneNumber,
                otpCredentials: action.payload,
                message: undefined,
                status: undefined,
                error: undefined,
            }
        case constants.GENERATE_OTP:
            return Object.assign({}, state, {
                isProcessing: true,
                token: undefined,
                validate: undefined,
                error: undefined,
            })
        case constants.GENERATE_OTP_SUCCESS:
            if (action.payload.response && action.payload.response.success == false) {
                return Object.assign({}, state, {
                    status:false,
                    message: action.payload.response.message,
                    isProcessing: false,
                })
            }
            if (action.payload.response && action.payload.response.data && action.payload.response.data.verificationStatus == true) {
                return Object.assign({}, state, {
                    verified: true,
                    token: action.payload.response.data.token,
                    isProcessing: false,
                })
            }
            return Object.assign({}, state, {
                verified: false,
                token: action.payload.response.data,
                isProcessing: false,
            })
        case constants.GENERATE_OTP_FAILURE:
            return Object.assign({}, state, {
                isProcessing: false,
                error: action.payload.response && action.payload.response.error,
                validate: undefined,
            })
        case constants.VERIFY_OTP:
            return Object.assign({}, state, {
                status: undefined,
                error: undefined,
                isProcessing: true,
            })
        case constants.VERIFY_OTP_SUCCESS:
            return Object.assign({}, state, {
                status: action.payload.response.success,
                error: undefined,
                isProcessing: false,
            })
        case constants.VERIFY_OTP_FAILURE:
            return Object.assign({}, state, {
                isProcessing: false,
                status: false,
                error: action.payload.response && action.payload.response.error
            })
        case constants.USER_DETAILS:
            return Object.assign({}, state, {
                credentials: Object.assign(state.credentials || {}, action.payload)
            })
        default:
            return state;
    }
}

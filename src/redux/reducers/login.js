import * as defs from '../defs';

const loginInitial = {

    mode: '',
    loginState: '',
    register: '',



    account_id:'',
    photo_id: '',
    jv_token: '',
    location: {},
    gps_location: {},
    user_exist: true,

    phone_number: '',
    createProfileState: '',

};

const reducerActions = {


    [defs.LOGIN_SET_STATE]: (state, action) => {
        return {...state, loginState: action.loginState, mode: '' };
    },

    [defs.LOGIN_SET_MODE]: (state, action) => {
        return {...state, mode: action.mode};
    },

    [defs.LOGIN_SET_REGISTER]: (state, action) => {
        return {...state, register: action.register, mode: ''};
    },

    [defs.LOGOUT]: (state, action) => {
        return {...state, loginState: 'login'};
    },






    [defs.LOGIN_REGISTER_REQUIRED]: (state, action) => {
        return {...state, createProfileState: action.createProfileState };
    },




    /* --- Whole Profile Load Reducers --- */

    [defs.LOGIN_ACCOUNT_AUTH]: (state, action) => {

        return {...state, account_id: action.account}

    },

    /* --- Whole Profile Load Reducers --- */

    [defs.LOGIN_ACCOUNT_KIT]: (state, action) => {

        return {...state, ...action.token}

    },

    [defs.LOGIN_ACCOUNT_SET_DATA]: (state, action) => {

        console.log('login reduce...:', action.data);

        return {...state, ...action.data}

    },

    /* --- Personal Info & About me Reducers --- */
    [defs.LOGIN_SEEKER_LOCATION_SET]: (state, action) => {

        return {...state, location: action.location};

    },
};

export default function loginReducer(state = loginInitial, action) {

    if (reducerActions[action.type] ) {
        return reducerActions[action.type](state, action);
    }

    return state;
}
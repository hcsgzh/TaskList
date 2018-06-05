import * as defs from '../defs';


const reducerActions = {
    [defs.HOME_TASK_LIST_SET_MODE]: (state, action) => {
        return {
            ...state,
            mode: action.mode,
        };
    },
};


const homeMetaInitial = {
    mode: '',
};


export default function homeMetaReducer(state = homeMetaInitial, action) {

    if (reducerActions[action.type] ) {
        return reducerActions[action.type](state, action);
    }

    return state;
}
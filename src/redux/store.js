import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as defs from './defs';

import homeReducer from './reducers/home';
import homeMetaReducer from './reducers/home_meta';

import loginReducer from './reducers/login';

const standardReducers = combineReducers(
    {

        home: combineReducers({
            data: homeReducer,
            meta: homeMetaReducer,
        }),
        // login : loginReducer,

    }
);

export const store = createStore((state, action) => {
    console.log('store1:',state);
    console.log('store2:',action);
    // if (action.type === defs.LOGOUT) {
    //     state = undefined;
    // }

    return standardReducers(state, action)
}, applyMiddleware(thunk));



//TODO: ---- DEBUG ONLY, REMOVE FOR RELEASE -----
store.subscribe(() => {
    console.log("The real updated Store....:",store.getState());
});

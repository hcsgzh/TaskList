
import * as defs from '../defs';

const reducerActions = {
    [defs.HOME_TASK_LIST_SET_RESULT]: (state, action) => {
            return {...state, taskList: action.taskList};
    },
    [defs.HOME_SELECTED_TASK_SET]: (state, action) => {
        return {...state, selected_item: action.item};
    },
    [defs.HOME_ADD_TASK_SET]: (state, action) => {
        let newTasklist =[ ...state.taskList,action.task];
        console.log('newTasklist::'+JSON.stringify(newTasklist));
        return {...state, taskList: newTasklist};
    }

};

const homeInitial = {
    taskList: [
        {
            id: 1,
            title: "title 1",
            description: "This text will be the description.",
            due_date: "2018-07-02 00:00:00",
            completed: "0",
            archived: "0",
            type: "TYPE_ONE"
        },
        {
            id: 2,
            title: "title 2",
            description: "2 This text will be the description.",
            due_date: "2018-08-01 00:00:00",
            completed: "0",
            archived: "0",
            type: "TYPE_ONE"
        },
        {
            id: 3,
            title: "title 3",
            description: "3 This text will be the description.",
            due_date: "2018-06-28 00:00:00",
            completed: "0",
            archived: "0",
            type: "TYPE_ONE"
        },
        {
            id: 4,
            title: "title 4",
            description: "4 This text will be the description.",
            due_date: "2018-12-05 00:00:00",
            completed: "0",
            archived: "0",
            type: "TYPE_ONE"
        },
        {
            id: 5,
            title: "title 5",
            description: "5 This text will be the description.",
            due_date: "2018-06-25 00:00:00",
            completed: "0",
            archived: "0",
            type: "TYPE_ONE"
        },
        {
            id: 6,
            title: "title 6",
            description: "6 This text will be the description.",
            due_date: "2018-12-05 00:00:00",
            completed: "0",
            archived: "0",
            type: "TYPE_ONE"
        },
    ],
    selected_item:{},
};


export default function homeReducer(state = homeInitial, action) {
    console.log('homeReducer1:',state);
    console.log('homeReducer2:',action);

    if (reducerActions[action.type] ) {
        return reducerActions[action.type](state, action);
    }

    return state;
}
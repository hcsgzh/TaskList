import * as defs from '../defs';
import { homeSetMode, homeSelectedSetMode } from "./home_meta";


//---- To load the all task list from the server ----
export function taskListLoad() {

    homeSetMode('updating');

    return (dispatch) => {

        //get all task from server
        let tasks=[];
        //set the tasks to reducer
        setAllTasks(tasks);

        setTimeout(() => {
            dispatch(homeSetMode('complete'));
        }, 1000);
    };

}


export function setAddItemLoad(item) {


    return (dispatch) => {
        homeSelectedSetMode('updating');
        setSelectedItem(item);
        homeSelectedSetMode('complete');
    };

}

export function setSelectedItemLoad(item) {


    return (dispatch) => {
        homeSelectedSetMode('updating');
        setSelectedItem(item);
        homeSelectedSetMode('complete');
    };

}



export function setAllTasks(tasks) {
    return {
        type: defs.HOME_TASK_LIST_SET_RESULT,
        result_type: 'all',
        taskList:tasks,
    };
}


export function setAddItem(task) {
    return {
        type: defs.HOME_ADD_TASK_SET,
        result_type: 'add',
        task:task,
    };
}


export function setSelectedItem(item) {
    return {
        type: defs.HOME_SELECTED_TASK_SET,
        result_type: 'select',
        item:item,
    };
}

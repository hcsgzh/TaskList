import * as defs from '../defs';

export function homeSetMode(mode = '') {
    return {
        type: defs.HOME_TASK_LIST_SET_MODE,
        mode: mode,
    };
}

export function homeSelectedSetMode(mode = '') {
    return {
        type: defs.HOME_SELECTED_TASK_SET_MODE,
        mode: mode,
    };
}


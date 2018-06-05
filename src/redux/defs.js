
/*
This file will contain a list of all actions that can be used on the redux model.

Redux model is only local data, server calls should be made in the actions section.

Please label what each action does..

 */

export const LOGOUT = 'LOGOUT';


/* --- LOGIN --- */
export const LOGIN_SET_MODE = 'LOGIN_SET_MODE';
export const LOGIN_SET_STATE = 'LOGIN_SET_STATE';
export const LOGIN_SET_REGISTER = 'LOGIN_SET_REGISTER';


/* --- HOME --- */
export const TASK_HOME = 'TASK_HOME';

export const HOME_TASK_LIST_SET_RESULT = 'HOME_TASK_LIST_SET_RESULT';
export const HOME_TASK_LIST_SET_MODE = 'HOME_TASK_LIST_SET_MODE';
export const HOME_SELECTED_TASK_SET = 'HOME_SELECTED_TASK_SET';
export const HOME_ADD_TASK_SET = 'HOME_ADD_TASK_SET';
export const HOME_SELECTED_TASK_SET_MODE = 'HOME_SELECTED_TASK_SET_MODE';




/* --- Leads --- */
export const TASK_LEADS = 'TASK_LEADS';


/* --- LISTINGS --- */
export const TASK_LISTINGS = 'TASK_LISTINGS';


/* --- Calendar --- */
export const TASK_CALENDAR = 'TASK_CALENDAR';

/* --- INSIGHTS --- */
export const TASK_INSIGHTS = 'TASK_INSIGHTS';

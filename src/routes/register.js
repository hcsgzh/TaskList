
import React from 'react';

//--- Register all the main routes ---

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

/* --- LOGIN  --- */
import LoginPage from '../components/login/login_page';

/* --- TASK HOME  --- */
import HomePage from '../components/home/home_page';
import AddTask from  '../components/home/add_task';

/* --- TASK OTHER  --- */
import LeadsPage from '../components/leads/leads_page';
import ListingsPage from '../components/listings/listings_page';
import CalendarPage from '../components/calendar/calendar_page';
import InsightsPage from '../components/insights/insights_page';

import LightBox from '../components/common/LightBox'


// screen related book keeping
export default function registerScreens(store) {

    Navigation.registerComponent('login', () => LoginPage, store, Provider);


    Navigation.registerComponent('task.Home', () => HomePage, store, Provider);
    Navigation.registerComponent('task.Add', () => AddTask, store, Provider);
    Navigation.registerComponent('task.Leads', () => LeadsPage, store, Provider);
    Navigation.registerComponent('task.Listings', () => ListingsPage, store, Provider);
    Navigation.registerComponent('task.Calendar', () => CalendarPage, store, Provider);
    Navigation.registerComponent('task.Insights',()=> InsightsPage,store,Provider);

    Navigation.registerComponent('layout.LightBox',()=> LightBox,store,Provider);

}




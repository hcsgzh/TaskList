
import { Navigation } from 'react-native-navigation';
import { store } from '../redux/store';


import registerScreens from './register';
//import {loginCheck} from "../redux/actions/login";
import Nav from "./nav";
import {AsyncStorage} from "react-native";
import { iconsMap, iconsLoaded} from "../components/common/app_icons";

//import { styleSetup } from "../components/common/styles/standard";






registerScreens(store);





//---- Start the app -----

export default class App {

    constructor() {

        iconsLoaded.then(() => {
            this.startApp('home');
        });



    }

    startApp(mode) {

        if (mode === 'login') {
            this.loginStart();
        } else if (mode === 'home') {
            console.log('home Start...');
            this.homeStart();
        }

    }

    loginStart() {
        Navigation.startSingleScreenApp({
            screen:{
                screen: 'login',
                title: 'welcome',
                navigatorStyle: {navBarHidden: true, drawUnderNavBar: true,},
                navigatorButtons: {}
            },
            passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
            animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
        });
    }

    homeStart() {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Home',
                    screen: 'task.Home', // this is a registered name for a screen
                    icon: iconsMap['md-checkbox-outline'],
                    //selectedIcon: require('../img/one_selected.png'), // iOS only
                    title: 'Home',
                    navigatorStyle: {
                        drawUnderNavBar: true,
                        navBarHidden: true,

                    }
                },

                {
                    label: 'Leads',
                    screen: 'task.Leads', // this is a registered name for a screen
                    icon: iconsMap['fire'],
                    //selectedIcon: require('../img/one_selected.png'), // iOS only
                    title: 'Leads'
                },

                {
                    label: 'Listings',
                    screen: 'task.Listings', // this is a registered name for a screen
                    icon: iconsMap['burst-sale'],
                    //selectedIcon: require('../img/one_selected.png'), // iOS only
                    title: 'Listings'
                },

                {
                    label: 'Calendar',
                    screen: 'task.Calendar', // this is a registered name for a screen
                    icon: iconsMap['ios-calendar-outline'],
                    //selectedIcon: require('../img/one_selected.png'), // iOS only
                    title: 'Calendar',


                },
                {
                    label: 'Insights',
                    screen: 'task.Insights', // this is a registered name for a screen
                    icon: iconsMap['chart-line'],
                    //selectedIcon: require('../img/one_selected.png'), // iOS only
                    title: 'Insights'
                },

            ]
        });
    }



}

class Nav {


    /* --- HOME NAV --- */


    pushHome(navigator, props) {
        navigator.push({
            screen: 'task.Home', // unique ID registered with Navigation.registerScreen
            title: 'Screen Home',
            navigatorStyle: { tabBarHidden: true, drawUnderTabBar: true },
            passProps: props || {},
        });
    }

    pushAddTask(navigator, props) {
        navigator.push({
            screen: 'task.Add', // unique ID registered with Navigation.registerScreen
            title: 'New Task',
            navigatorStyle: { tabBarHidden: true, drawUnderTabBar: true },
            passProps: props || {},
        });
    }

    pushLeads(navigator) {
        navigator.push({
            screen: 'task.Leads', // unique ID registered with Navigation.registerScreen
            title: 'Screen Leads',
            navigatorStyle: { tabBarHidden: true, drawUnderTabBar: true },
        });
    }

    pushListings(navigator) {
        navigator.push({
            screen: 'task.Listings', // unique ID registered with Navigation.registerScreen
            title: 'Screen Listings',
            navigatorStyle: { tabBarHidden: true, drawUnderTabBar: true },
        });
    }


    pushCalendar(navigator) {
        navigator.push({
            screen: 'task.Calendar', // unique ID registered with Navigation.registerScreen
            title: 'Screen Calendar',
            navigatorStyle: { tabBarHidden: true, drawUnderTabBar: true },
        });
    }


    pushInsights(navigator) {
        navigator.push({
            screen: 'task.Insights', // unique ID registered with Navigation.registerScreen
            title: 'Screen Insights',
            navigatorStyle: { tabBarHidden: true, drawUnderTabBar: true },
        });
    }



}

export default new Nav();
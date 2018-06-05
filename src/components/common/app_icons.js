// Define all your icons once,
// load them once,
// and use everywhere

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
    "ios-person": [30, "#bbb"],
    "ios-person--big": [50, "#bbb"],

    "ios-person--active": [30, "#fff"],
    "ios-person--active--big": [50, "#fff"],
    "ios-person--active--very-big": [100, "#fff"],

    "ios-people": [30, "#bbb"],
    "ios-people--active": [30, "#fff"],

    "ios-keypad": [30, "#bbb"],
    "ios-keypad--active": [30, "#fff"],

    "ios-chatbubbles": [30, "#bbb"],
    "ios-chatbubbles--active": [30, "#fff"],

    // Use other Icon provider, see the logic at L39
    "facebook": [30, "#bbb", FontAwesome],
    "facebook--active": [30, "#fff", FontAwesome],

    "md-checkbox-outline": [30, "#4E4E4E"],
    "fire": [30, "#4E4E4E", SimpleLineIcons],
    "burst-sale": [30, "#4E4E4E", Foundation],
    "ios-calendar-outline": [30,"#4E4E4E"],
    "chart-line":[30,"#4E4E4E", MaterialCommunityIcons],

};

const defaultIconProvider = Ionicons;

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
    new Promise.all(
        Object.keys(icons).map(iconName => {
            const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
            return Provider.getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                icons[iconName][0],
                icons[iconName][1]
            )
        })
    ).then(sources => {
        Object.keys(icons)
            .forEach((iconName, idx) => iconsMap[iconName] = sources[idx]);

        // Call resolve (and we are done)
        resolve(true);
    })
});

export {
    iconsMap,
    iconsLoaded,
};
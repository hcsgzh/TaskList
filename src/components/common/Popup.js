import {Navigation} from "react-native-navigation";


export default class Popup {

    static show({title, content,type, buttonName, link, buttonNameLeft, buttonNameRight}, callback) {

        return new Promise((resolve, reject) => {
            Navigation.showLightBox({
                screen: 'layout.LightBox', // unique ID registered with Navigation.registerScreen
                passProps: {
                    title: title,
                    content: content,
                    type: type,
                    buttonName: buttonName,
                    link: link,
                    buttonNameLeft: buttonNameLeft,
                    buttonNameRight: buttonNameRight,
                    onPress: (type) => { if(callback) {

                        callback(type);

                    } resolve(type); },
                }, // simple serializable object that will pass as props to the modal (optional)
                style: {
                    backgroundBlur: 'none', // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
                    backgroundColor: '#4f4f4f90', // tint color for the background, you can specify alpha here (optional)
                    tapBackgroundToDismiss: false // dismisses LightBox on background taps (optional)
                }
            });
        });

    }

    static async showAsync(data) {
        return new Promise((resolve, reject) => {
            Popup.show(data, resolve);
        });
    }
}
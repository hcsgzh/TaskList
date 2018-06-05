import {Dimensions, StyleSheet} from 'react-native';


export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT  = Dimensions.get('window').height;


const commonStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#CCCCCC',
    },

});

export default commonStyles;
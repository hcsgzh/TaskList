import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Platform, Dimensions, Animated, Easing} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');



export default class MoveLine extends React.Component {


    static propTypes = {
        selectionColor: PropTypes.string,
    };

    static defaultProps = {
        selectionColor: '#FF0000',
        minimized: false,
    };

    componentWillMount() {

        if (this.props.minimized) {
            this.moveValue = new Animated.Value(1);
        } else {
            this.moveValue = new Animated.Value(0);
        }

        this.widthShell = 0;

        //this.moveValue = new Animated.Value(0);
        //this.props.shake && this.shake();

        //this.animateLabelUp();
    }

    componentWillReceiveProps(nextProps) {
        //nextProps.shake && this.props.shake !== nextProps.shake && this.shake();

        if (nextProps.minimized && !this.props.minimized) {
            this.animateLineUp();
        } else if (!nextProps.minimized && this.props.minimized) {
            this.animateLineDown();
        }

    }

    animateLineUp() {
        const { moveValue } = this;
        moveValue.setValue(0);
        Animated.timing(moveValue, {
            duration: 260,
            toValue: 1,
            //ease: Easing.bounce,
            ease: Easing.in,
        }).start();
    }

    animateLineDown() {
        const { moveValue } = this;
        moveValue.setValue(1);
        Animated.timing(moveValue, {
            duration: 260,
            toValue: 0,
            //ease: Easing.bounce,
            ease: Easing.out,
        }).start();
    }


    render() {

        const widthShift = 40;

        // const aniWidth = this.moveValue.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [0, width - widthShift],
        // });
        //
        // const aniLeft = this.moveValue.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [(width - widthShift) / 2.0, 0],
        // });

        const aniWidth = this.moveValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, this.widthShell],
        });

        const aniLeft = this.moveValue.interpolate({
            inputRange: [0, 1],
            outputRange: [this.widthShell / 2.0, 0],
        });

        return (
            <View style={{flex: 1}} onLayout={(e)=> {this.widthShell = e.nativeEvent.layout.width}}>
                <Animated.View pointerEvents="none" style={[
                    styles.baseLine,
                    this.props.outerStyle,
                    {
                        borderBottomColor: this.props.selectionColor,
                        width: aniWidth,
                        left: aniLeft,
                    }
                ]}>
                </Animated.View>
            </View>
        );

    }

}


const styles = StyleSheet.create({

    baseLine: {
        top: 1,
        left: 0,
        //borderBottomColor: '#FF0000',
        borderBottomWidth: 1,
        height: 1,
    },

});
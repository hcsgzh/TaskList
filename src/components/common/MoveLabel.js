import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Platform, Dimensions, Animated, Easing} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');



export default class MoveLabel extends React.Component {


    static propTypes = {
        headerHeight: PropTypes.number,
        areaHeight: PropTypes.number,
        fontFull: PropTypes.number,
        fontMin: PropTypes.number,
        minimized: PropTypes.bool,
        outerStyle: PropTypes.object,
        labelStyle: PropTypes.object,
    };

    static defaultProps = {
        headerHeight: 14,
        areaHeight: 36,
        fontFull: 14,
        fontMin: 10,
        minimized: false,
    };

    componentWillMount() {

        if (this.props.minimized) {
            this.moveValue = new Animated.Value(0);
        } else {
            this.moveValue = new Animated.Value(1);
        }

        //this.moveValue = new Animated.Value(0);
        //this.props.shake && this.shake();

        //this.animateLabelUp();
    }

    componentWillReceiveProps(nextProps) {
        //nextProps.shake && this.props.shake !== nextProps.shake && this.shake();

        if (nextProps.minimized && !this.props.minimized) {
            this.animateLabelUp();
        } else if (!nextProps.minimized && this.props.minimized) {
            this.animateLabelDown();
        }

    }

    animateLabelUp() {
        const { moveValue } = this;
        moveValue.setValue(1);
        Animated.timing(moveValue, {
            duration: 200,
            toValue: 0,
            //ease: Easing.bounce,
        }).start();
    }

    animateLabelDown() {
        const { moveValue } = this;
        moveValue.setValue(0);
        Animated.timing(moveValue, {
            duration: 200,
            toValue: 1,
            //ease: Easing.bounce,
        }).start();
    }


    render() {

        const aniHeight = this.moveValue.interpolate({
            inputRange: [0, 1],
            outputRange: [this.props.headerHeight, this.props.areaHeight],
        });
        const aniTop = this.moveValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, this.props.headerHeight],
        });
        const aniFontSize = this.moveValue.interpolate({
            inputRange: [0, 1],
            outputRange: [this.props.fontMin, this.props.fontFull],
        });

        return (
            <Animated.View pointerEvents="none" style={[
                styles.displayLabel,
                this.props.outerStyle,
                {
                    top: aniTop,
                    height: aniHeight
                }
            ]}>
                <Animated.Text style={[
                    styles.displayText,
                    this.props.labelStyle,
                    {
                        fontSize: aniFontSize
                    }
                ]}>{this.props.children}</Animated.Text>
            </Animated.View>
        );

    }

}


const styles = StyleSheet.create({

    displayLabel: {
        position: 'absolute',
        height: 36,
        top: 0,
        left: 0,
        width: width - 40,
        justifyContent: 'center',
        backgroundColor:'transparent',
    },
    displayText: {
        backgroundColor:'transparent',
        color: '#CCC',
        fontWeight: 'bold',
    }

});
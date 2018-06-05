/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, PickerIOS, Platform, Linking} from 'react-native';
import { Container, Content, Item, Input, Button, Icon, View, Card,
    CardItem, Spinner, Left, Body, Right } from 'native-base';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import {Navigation} from "react-native-navigation";
import { Calendar, CalendarList } from 'react-native-calendars';


import * as COMMON_STYLES from "./styles";


class LightBoxDisplay extends Component<{}> {

    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string,
        buttonName: PropTypes.string,
        buttonNameLeft: PropTypes.string,
        buttonNameRight: PropTypes.string,
        type: PropTypes.string,// datePicker, normal
    };


    static defaultProps = {
        title: 'Opps!',
        content: 'Network connection fail!',
        buttonName: null,
        buttonNameLeft: null,
        buttonNameRight: null,
        type: 'normal',

    };


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            selected:''
        };

        this._onConfirm = this._onConfirm.bind(this);
        this.onDayPress= this.onDayPress.bind(this);
    }



    _onConfirm(type) {

        Navigation.dismissLightBox();

        if(this.props.link) {
            Linking.openURL('https://www.google.com/');
        }

        if(this.props.type ==='datePicker'){
            if(this.props.onPress){
                this.props.onPress(this.state.selected);
                return;
            }
        }

        setTimeout(() => {
            if(this.props.onPress){
                this.props.onPress(type);
            }
        }, 600);

    }

    onDayPress(day) {
        console.log('onDayPress:'+day.dateString,day);
        this.setState({
            selected: day.dateString
        });
    }


    render() {

        let {
            title,
            content,
            buttonName,
            buttonNameLeft,
            buttonNameRight,
            type,
            ...attributes
        } = this.props;

        console.log('Light Box:'+type);


        return (

            <View style={styles.container}>

                <View style={styles.innerModal}>

                    <View style={styles.splittingLine} >
                        <Text style={styles.msgTitle}>{title}</Text>
                        <Text style={styles.msg}>{content}</Text>
                        {type ==='datePicker'?
                            <View>
                                <Calendar
                                    onDayPress={this.onDayPress}
                                    style={styles.calendar}
                                    hideExtraDays
                                    markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
                                />
                            </View>:null
                        }
                    </View>


                    {buttonName == null ?

                        <View style={styles.buttonView}>
                            <View style={styles.splittingLineMiddle}>
                                <Button style={styles.btn} onPress={() => this._onConfirm('LEFT')}>
                                    <Text style={styles.btnText}>{buttonNameLeft}</Text>
                                </Button>
                            </View>
                            <View>
                                <Button style={styles.btn} onPress={() => this._onConfirm('RIGHT')}>
                                    <Text style={styles.btnText}>{buttonNameRight}</Text>
                                </Button>
                            </View>
                        </View>

                        :

                        type ==='datePicker'?
                            <View style={styles.buttonView}>
                                <Button style={styles.btn} onPress={() => this._onConfirm('MIDDLE')}>
                                    <Text style={styles.btnText}>{buttonName}</Text>
                                </Button>
                            </View>
                            :

                        <View style={styles.buttonView}>
                            <Button style={styles.btn} onPress={() => this._onConfirm(buttonName)}>
                                <Text style={styles.btnText}>{buttonName}</Text>
                            </Button>
                            <View style={{width: COMMON_STYLES.SCREEN_WIDTH / 1.2,height:1,backgroundColor:'#c1c1c1'}}>

                            </View>
                            <Button style={styles.btn} onPress={() => this._onConfirm('COMPLETED')}>
                                <Text style={styles.btnText}>COMPLETED</Text>
                            </Button>
                            <View style={{width: COMMON_STYLES.SCREEN_WIDTH / 1.2,height:1,backgroundColor:'#c1c1c1'}}>

                            </View>
                            <Button style={styles.btn} onPress={() => this._onConfirm('RESCHEDULE')}>
                                <Text style={styles.btnText}>RESCHEDULE</Text>
                            </Button>
                        </View>
                    }

                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        //borderBottomColor: '#CCCCCC',
        alignItems: 'center'
    },

    innerModal: {
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 15,
    },

    splittingLine: {
        flex: 5,
        width: COMMON_STYLES.SCREEN_WIDTH / 1.2,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'transparent',
        alignItems:'center',
        justifyContent: 'center',
        borderBottomColor: '#c1c1c1',
        paddingTop: 5,
        paddingBottom:20,
        //backgroundColor:'grey',
    },

    splittingLineMiddle: {
        height: COMMON_STYLES.SCREEN_WIDTH / 8,
        borderWidth: 1,
        borderColor: 'transparent',
        alignItems:'center',
        borderRightColor: '#c1c1c1',

    },

    msgTitle: {
        //paddingBottom:10,
        fontSize: 18,
        color:'black',
        fontWeight:'bold',
        textAlign: 'center',
    },

    msg: {
        paddingTop:10,
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        //fontWeight: 'bold'
    },

    buttonView: {
        flex: 2,
        flexDirection: 'column',
        justifyContent:'center',
        //paddingTop: 10,
        paddingBottom: 10,
        //backgroundColor: 'red',
    },

    btn: {
        flexDirection:'row',
        width: COMMON_STYLES.SCREEN_WIDTH / 1.2,
        borderRadius: 12,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },

    btnText: {
        color: '#939393',
        fontWeight: 'bold',
        fontSize: 14,
    },
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
    }

});


//----- Controller -----
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        meta: state.home.meta,
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    };
};

const LightBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(LightBoxDisplay);

export default LightBox;

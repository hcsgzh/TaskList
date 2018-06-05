import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image, TouchableOpacity} from 'react-native';
import {Container, Content, Header , Left, Right, Title, Icon, Tab, Tabs, Item, Input, Form, Picker} from 'native-base';
import TextBox from '../../common/TextBox';
import Popup from '../../common/Popup';
import * as commonStyles from'../../common/styles';




export default class AddTaskDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            selected_type:undefined,
            name:'',
            description:'',
            date: undefined,
        };

        this.onValueChange= this.onValueChange.bind(this);
        this._datePickOnPress=this._datePickOnPress.bind(this);
        this._nextOnPress=this._nextOnPress.bind(this);


    }

    onValueChange(val: string){
        console.log('onValue Change:'+ val+'; selected_type:'+ this.state.selected_type);
        this.setState({
            selected_type: val
        });
    }

    _datePickOnPress(){
        console.log('date picker on press');
        Popup.show({
            title:'Select Date',
            content: '',
            type:'datePicker',
            buttonName: 'Select',
        },(date)=>{

            console.log('add task display::'+date);
            this.setState({
                date: date
            });

        })

    }

    _nextOnPress(){

        console.log('next button');
        console.log('selected_type:'+this.state.selected_type);
        console.log('name:'+this.state.name);
        console.log('description:'+this.state.description);
        console.log('date:'+this.state.date);

        /*
        id: 1,
            title: "title 1",
            description: "This text will be the description.",
            due_date: "2018-07-02 00:00:00",
            completed: "0",
            archived: "0",
            type: "TYPE_ONE"
         */

        let newtask ={
            id: new Date().getMilliseconds(),
            title: this.state.name,
            description: this.state.description,
            due_date: this.state.date,
            completed: "0",
            archived: "0",
            type: this.state.selected_type
        };

        this.props.setAddedTask(newtask);
        this.props.navigator.pop();



    }



    render() {
        return (
            <Container style={{backgroundColor:'#f8f8f8'}}>
                <Content style={{margin:20}}>
                    <View>
                        <Text>Introduction for Creating a task, please follow the steps bellow!</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{fontWeight:'bold'}}>Type of Task</Text>
                        <View style={{borderWidth: 0.5, borderColor: '#d6d7da', marginTop:10}}>
                            <Form >
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select task type"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    placeholder="Select a task type"
                                    placeholderStyle = {{fontSize: 14}}
                                    selectedValue={this.state.selected_type}
                                    onValueChange={this.onValueChange}
                                >
                                    <Picker.Item label="Wallet" value="0" />
                                    <Picker.Item label="ATM Card" value="1" />
                                    <Picker.Item label="Debit Card" value="2" />
                                    <Picker.Item label="Credit Card" value="3" />
                                    <Picker.Item label="Net Banking" value="4" />
                                </Picker>
                            </Form>
                        </View>


                        <View style={{
                            height: 1,
                            backgroundColor: "#CED0CE",
                            marginVertical:20
                        }}>
                        </View>



                        <TextBox label="Task name" placeholder="Enter the task name" value={this.state.name} onChangeText={(val) => {
                            this.setState({ name: val });
                        }}
                        />

                        <TextBox label="Task description" placeholder="Please describe the task" value={this.state.description} onChangeText={(val) => {
                            this.setState({ description: val });
                        }}
                           textHeight={100} multiline = {true}
                        />

                        <View style={{
                            height: 1,
                            backgroundColor: "#CED0CE",
                            marginVertical:20
                        }}>
                        </View>

                        <Text style={{fontWeight:'bold'}}>Due Date</Text>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                borderWidth: 0.5,
                                borderColor: '#d6d7da'
                            }}
                        >
                            <TouchableOpacity onPress={this._datePickOnPress} style={{flex:1,flexDirection:'row', alignItems: 'center',justifyContent: 'space-between',paddingHorizontal:5}}>
                                <Text style={{color:'#93959b'}}>{this.state.date?this.state.date:'No specific date'}</Text>
                                <Icon color='#93959b' name='ios-calendar-outline'/>
                            </TouchableOpacity>

                        </View>






                    </View>
                </Content>
                <View style={{backgroundColor:'#9B9B9B'}}>
                    <TouchableOpacity style={styles.button}  onPress={this._nextOnPress}>
                        <View style={styles.container}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Next</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
            </Container>


        );
    }
}

const styles = StyleSheet.create({

    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
    },textContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    iconContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 10,
    },

    text: {
        fontSize: 16,
        color: 'white',
    },
    button: {

    },container: {
        height: 50,
        width: commonStyles.SCREEN_WIDTH,
        flexDirection: 'row',

    },

});
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image, TouchableOpacity, Platform, FlatList} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import {Container, Header , Left, Right, Title, Icon, Tab, Tabs, Item, Input, Button, Card} from 'native-base';
import {SearchBar,ListItem} from 'react-native-elements';
import * as commonStyles from'../../common/styles';
import { Navigation } from 'react-native-navigation';
import Nav from '../../../routes/nav';
import Popup from '../../common/Popup';


export default class HomePageDisplay extends React.Component {

    constructor(){
        super();

        this.state={
            isModalVisible: false,
            selected_item: null
        };

        this._rightCompOnPress = this._rightCompOnPress.bind(this);
        this._pressItem = this._pressItem.bind(this);
        console.log('home page  constructor!!');
    }

    componentWillMount(){

        console.log('home page  componentWillMount!!!');
    }



    _rightCompOnPress(){
        //here should go to my profile page
        console.log('go to my profile');

    }

    _pressItem=(item)=>{

        item&&console.log('pressItem:'+item.title);

        this.props.setSelectedItem(item);

        Popup.show({
            title:item.title,
            content: item.description,
            buttonName: 'ACTION 01',
        },(item)=>{

            console.log('select ::'+item);

        })
    };

    _searchTerm(text){
        console.log('search term:'+text);
    }


    /**
     * convert a millisecond to days, hours, minutes, or seconds
     * @param millisec
     * @returns {string}
     */
    timeConversion(millisec) {

        let seconds = (millisec / 1000).toFixed(1);

        let minutes = (millisec / (1000 * 60)).toFixed(1);

        let hours = (millisec / (1000 * 60 * 60)).toFixed(1);

        let days = (millisec / (1000 * 60 * 60 * 24)).toFixed(0);

        if (seconds < 60) {
            return seconds + " sec";
        } else if (minutes < 60) {
            return minutes + " min";
        } else if (hours < 24) {
            return hours + " hrs";
        } else {
            return days + " days"
        }
    }

    /**
     * get duration between expire date and now
     * @param expire_date
     * @returns {*}
     */
    daysBetweenDates(expire_date){
        console.log('daysBetweenDates::'+expire_date);

        let expireDate = Date.parse(expire_date);
        let dateNow =  Date.now();

        let duration = this.timeConversion(expireDate-dateNow);

        //console.log('expire date::'+expire_date+';   Duration:::'+duration);

        return duration;
    }

    isExpired(expire_date){

        let expireDate = Date.parse(expire_date);
        let dateNow =  Date.now();

        return expireDate>dateNow;
    }



    renderTask(){
        console.log('renderListItem:'+this.state.isModalVisible);

        return(
            <FlatList
                data={this.props.taskList}
                renderItem={({item})=> {
                    return <Card>
                        <View style={homeStyles.item}>
                            <TouchableHighlight onPress={() =>{
                                console.log('press item::'+item.title);
                                this._pressItem(item);
                            }}>
                                <View style ={{ flexDirection: 'column',}}>

                                    <View style ={{ flexDirection: 'row', padding:5,}}>
                                        <Icon
                                            style={{width: 60, height: 60, fontSize:50}}
                                            name = 'ios-images-outline'
                                        />
                                        <View style ={{ flexDirection: 'column',marginLeft:10,flex:1}}>
                                            <View style = {{flexDirection: 'row',justifyContent: 'space-between',}}>
                                                <View style={{alignItems:'flex-start',}}>
                                                    <Text style={{fontWeight:'bold'}}>{item.title} </Text>
                                                </View>
                                                <View style={{alignItems:'flex-end',}}>
                                                    <Text style={{color:'#93959b'}}>Due in {this.daysBetweenDates(item.due_date)} </Text>
                                                </View>

                                            </View>

                                            <Text style={homeStyles.taskDescription}>{item.description} </Text>
                                            <Text style={homeStyles.taskType}>{item.type} </Text>

                                        </View>
                                    </View>


                                </View>
                            </TouchableHighlight>
                        </View>
                    </Card>
                }}
                keyboardShouldPersistTaps ={'always'}// for double click on search icon after input keyword
                keyExtractor={item => item.id}
                onRefresh={this.handleRefresh}
                refreshing={false}

            />
        );
    }



    render() {
        self = this;

        return (

            <Container>

                <Header>
                    <Left>
                        <Title>Home</Title>
                    </Left>
                    <Right>

                        <TouchableOpacity onPress={this._rightCompOnPress} style={{flex:1,flexDirection:'column',alignItems:'flex-end',}}>
                            <View style={{flex:1,flexDirection:'column',alignItems: 'center'}}>
                                <Icon color='#93959b' name='ios-contact-outline' style ={{fontSize: 25,}}/>
                                <Text style={{color:'#93959b'}}>My profile</Text>
                            </View>

                        </TouchableOpacity>
                    </Right>
                </Header>

                <Tabs initialPage={0} tabBarUnderlineStyle={{backgroundColor:'#000000'}}>
                    <Tab heading="Tasks" textStyle={{color:'#93959b'}} activeTextStyle={{color:'#000000'}} >

                        <Container>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: 'rgb(226, 232, 237)',

                                }}
                            >
                                <SearchBar placeholder="Search"
                                           width={commonStyles.SCREEN_WIDTH-80}
                                           lightTheme
                                           onChangeText={(text) => this.state.searchTerm = text}
                                           onPress={(text) =>this._searchTerm(text)}
                                />
                                <Icon name='ios-add'
                                      style={{ marginRight:10}}
                                      onPress={() => {
                                          console.log('add');
                                          Nav.pushAddTask(this.props.navigator);
                                      }}
                                />
                                <Icon name='ios-folder-outline'
                                      onPress={() => {
                                          console.log('archive');
                                      }}
                                />
                            </View>

                            <View style={{flex:1}}>
                                <FlatList
                                    data={this.props.taskList}
                                    renderItem={({item})=> {
                                        return <Card>
                                            <View style={homeStyles.item}>
                                                <TouchableHighlight onPress={() =>{
                                                    console.log('press item::'+item.title);
                                                    this._pressItem(item);
                                                }}>
                                                    <View style ={{ flexDirection: 'column',}}>

                                                        <View style ={{ flexDirection: 'row', padding:5,}}>
                                                            <Icon
                                                                style={{width: 60, height: 60, fontSize:50}}
                                                                name = 'ios-images-outline'
                                                            />
                                                            <View style ={{ flexDirection: 'column',marginLeft:10,flex:1}}>
                                                                <View style = {{flexDirection: 'row',justifyContent: 'space-between',}}>
                                                                    <View style={{alignItems:'flex-start',}}>
                                                                        <Text style={{fontWeight:'bold'}}>{item.title} </Text>
                                                                    </View>
                                                                    <View style={{alignItems:'flex-end',}}>
                                                                        <Text style={{color:'#93959b'}}>Due in {this.daysBetweenDates(item.due_date)} </Text>
                                                                    </View>

                                                                </View>

                                                                <Text style={homeStyles.taskDescription}>{item.description} </Text>
                                                                <Text style={homeStyles.taskType}>{item.type} </Text>

                                                            </View>
                                                        </View>


                                                    </View>
                                                </TouchableHighlight>
                                            </View>
                                        </Card>
                                    }}
                                    keyboardShouldPersistTaps ={'always'}// for double click on search icon after input keyword
                                    keyExtractor={item => item.id}
                                    onRefresh={this.handleRefresh}
                                    refreshing={false}

                                />
                            </View>

                        </Container>



                    </Tab>
                    <Tab heading="Notifications" textStyle={{color:'#93959b'}} activeTextStyle={{color:'#000000'}} >
                        <View>
                            <Text>Notifications</Text>
                        </View>
                    </Tab>
                </Tabs>

            </Container>
        );
    }
}

const homeStyles = StyleSheet.create({
    jobTitle: {
        fontSize: 10,
        color: '#70757a',
        backgroundColor: '#d1d3d6',
        alignSelf: "flex-start",
        overflow: 'hidden',
        borderRadius: 3,
        paddingLeft: 10,
        paddingRight:10,
        paddingTop:2,
        paddingBottom:2,
        marginTop:5,
        marginBottom:5,


    },
    taskDescription: {
        fontSize:14,
        color:'#2e3035'
    },
    taskType: {
        marginTop:5,
        color: '#70757a',
        fontSize: 12,
        ...Platform.select({
            ios: {
                fontWeight: 'bold',
            },
            android: {

            },
        }),
    },item: {
        margin: 5,
        backgroundColor:'white',
    },
});

/*

 */
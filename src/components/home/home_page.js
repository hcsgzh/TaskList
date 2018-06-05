import { connect } from 'react-redux';
import HomePageDisplay from './display/home_page_display';
import {
    taskListLoad, setSelectedItemLoad
} from "../../redux/actions/home";


const mapStateToProps = (state, ownProps) => {
    console.log('home page :::',state.home.data.taskList);
    return {
        taskList: state.home.data.taskList,
        selected_item: state.home.data.selected_item,
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        getAllTasks: (body)=>{
            dispatch(taskListLoad(body));
        },
        setSelectedItem: (item)=>{
            dispatch(setSelectedItemLoad(item));
        }

    };
};

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageDisplay);

export default HomePage;
import { connect } from 'react-redux';
import AddTaskDisplay from './display/add_task_display';
import {setAddItem} from '../../redux/actions/home';


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        setAddedTask: (task)=>{
            dispatch(setAddItem(task));
        }
    };
};

const AddTaskPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTaskDisplay);

export default AddTaskPage;
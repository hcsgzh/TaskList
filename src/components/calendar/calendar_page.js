import { connect } from 'react-redux';
import CalendarDisplay from './display/calendar_page_display';


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {

    };
};

const CalendarPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarDisplay);

export default CalendarPage;
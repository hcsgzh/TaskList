import { connect } from 'react-redux';
import LeadsDisplay from './display/leads_page_display';


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {

    };
};

const LeadsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeadsDisplay);

export default LeadsPage;
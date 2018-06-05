import { connect } from 'react-redux';
import InsightsDisplay from './display/insights_page_display';


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {

    };
};

const InsightsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(InsightsDisplay);

export default InsightsPage;
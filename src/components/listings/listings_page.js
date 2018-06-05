import { connect } from 'react-redux';
import ListingsDisplay from './display/listings_page_display';


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {

    };
};

const ListingsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListingsDisplay);

export default ListingsPage;
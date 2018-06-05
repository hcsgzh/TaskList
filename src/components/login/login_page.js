import { connect } from 'react-redux';
import LoginDisplay from './display/login_page_display';


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {

    };
};

const LoginPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginDisplay);

export default LoginPage;
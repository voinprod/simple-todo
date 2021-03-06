import App from '../components/App';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as todoAction from '../actions/todoAction';


const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(todoAction, dispatch),
})

export default connect(null, mapDispatchToProps)(App);


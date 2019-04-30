import { connect } from 'react-redux';
import {signUp, confirmCode, loginFailed } from '../../actions/AuthActions'
import Login from './main';





const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  firebaseCode: state.auth.firebaseCode,
  errorMessage: state.auth.errorMessage,
  codeIsSent: state.auth.codeIsSent
})


export default connect(mapStateToProps, {signUp, confirmCode, loginFailed})(Login)

import { connect } from 'react-redux';
import { checkAuth } from '../../actions/AuthActions';


import Home from './main';

const mapStateToProps = (state) => ({
  rooms: state.room.roomsList
})

export default connect(mapStateToProps, {checkAuth})(Home)

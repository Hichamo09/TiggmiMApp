import { connect } from 'react-redux';
import { checkAuth } from '../../actions/AuthActions';
import { getRooms, addRoom } from '../../actions/RoomActions';


import Home from './main';

const mapStateToProps = (state) => ({
  rooms: state.room.roomsList,
  user: state.auth.currentUser
})

export default connect(mapStateToProps, {checkAuth, getRooms, addRoom})(Home)

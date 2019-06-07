import { connect } from 'react-redux';
import { getRooms, updateRoom } from '../../actions/RoomActions'
import Rooms from './main'


const mapStateToProps = (state) => ({
  rooms: state.room.roomsList
})

export default connect(mapStateToProps, {getRooms, updateRoom})(Rooms)

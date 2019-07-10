import { connect } from 'react-redux';
import { getRooms, updateRoom, updateLight } from '../../actions/RoomActions'
import Rooms from './main'


const mapStateToProps = (state) => ({
  rooms: state.room.roomsList
})

export default connect(mapStateToProps, {getRooms, updateRoom, updateLight})(Rooms)

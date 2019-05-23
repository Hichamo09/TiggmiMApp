import { connect } from 'react-redux';
import { getRooms } from '../../actions/RoomActions'


import AddCycle from './main';

const mapStateToProps = (state) => ({
  rooms: state.room.roomsList
})

export default connect(mapStateToProps, {getRooms})(AddCycle)

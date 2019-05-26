import { connect } from 'react-redux';
import { getRooms } from '../../actions/RoomActions'
import { addCycle } from '../../actions/CycleActions'


import AddCycle from './main';

const mapStateToProps = (state) => ({
  rooms: state.room.roomsList
})

export default connect(mapStateToProps, {getRooms, addCycle})(AddCycle)

import { connect } from 'react-redux';
import { addMember, updateMember } from '../../actions/MemberActions'
import { getRooms } from '../../actions/RoomActions'


import AddMember from './main';

const mapStateToProps = (state) => ({
  rooms: state.room.roomsList,
})

export default connect(mapStateToProps, {addMember, getRooms, updateMember})(AddMember)

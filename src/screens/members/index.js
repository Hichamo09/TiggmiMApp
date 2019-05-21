import { connect } from 'react-redux';
import { getMembers } from '../../actions/MemberActions'
import { getRooms } from '../../actions/RoomActions'


import Members from './main';

const mapStateToProps = (state) => ({
  members: state.member.membersList
})

export default connect(mapStateToProps, {getMembers, getRooms})(Members)

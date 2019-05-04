import { connect } from 'react-redux';
import { getMembers } from '../../actions/MemberActions'

import Members from './main';

const mapStateToProps = (state) => ({
  members: state.member.membersList
})

export default connect(mapStateToProps, {getMembers})(Members)

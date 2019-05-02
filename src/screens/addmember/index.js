import { connect } from 'react-redux';
import { addMember } from '../../actions/MemberActions'


import AddMember from './main';

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {addMember})(AddMember)

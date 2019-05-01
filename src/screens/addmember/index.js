import { connect } from 'react-redux';
import { checkAuth } from '../../actions/AuthActions'

import AddMember from './main';

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {checkAuth})(AddMember)

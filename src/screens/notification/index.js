import { connect } from 'react-redux';
import { checkAuth } from '../../actions/AuthActions'

import Notification from './main';

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {checkAuth})(Notification)

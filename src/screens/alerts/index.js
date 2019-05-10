import { connect } from 'react-redux';
import { checkAuth } from '../../actions/AuthActions'

import Alert from './main';

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {checkAuth})(Alert)

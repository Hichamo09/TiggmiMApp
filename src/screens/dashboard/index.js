import { connect } from 'react-redux';
import { checkAuth } from '../../actions/AuthActions'

import Dashboard from './main';






const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {checkAuth})(Dashboard)

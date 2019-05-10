import { connect } from 'react-redux';
import { checkAuth } from '../../actions/AuthActions'

import Help from './main';

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {checkAuth})(Help)

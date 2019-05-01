import { connect } from 'react-redux';
import { checkAuth } from '../../actions/AuthActions'

import Members from './main';

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {checkAuth})(Members)


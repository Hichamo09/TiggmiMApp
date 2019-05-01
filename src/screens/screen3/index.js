import { connect } from 'react-redux';
import { checkAuth } from '../../actions/AuthActions'

import Screen3 from './main';

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {checkAuth})(Screen3)

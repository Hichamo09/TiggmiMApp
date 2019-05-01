import { connect } from 'react-redux';
import { checkAuth } from '../../actions/AuthActions'

import Screen2 from './main';

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {checkAuth})(Screen2)

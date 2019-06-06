import { connect } from 'react-redux';
import { checkAuth } from '../../actions/AuthActions'
import { getCycle } from '../../actions/CycleActions'
import { getRooms } from '../../actions/RoomActions';


import Cycles from './main';

const mapStateToProps = (state) => ({
  cycles: state.cycle.cycles
})

export default connect(mapStateToProps, {checkAuth, getCycle, getRooms})(Cycles)

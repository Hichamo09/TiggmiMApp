import { connect } from 'react-redux';

import Consumption from './main';

const mapStateToProps = (state) => ({
  rooms: state.room.roomsList
})

export default connect(mapStateToProps, {})(Consumption)

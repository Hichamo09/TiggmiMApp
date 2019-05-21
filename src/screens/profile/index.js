import Profile from './main'
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
  rooms: state.room.roomsList
})
export default connect(mapStateToProps, {})(Profile)

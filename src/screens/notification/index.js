import { connect } from 'react-redux';
import { getNotifications, addNotification } from '../../actions/NotificationActions';

import Notification from './main';

const mapStateToProps = (state) => ({
  notifications: state.notification.notificationsList
})

export default connect(mapStateToProps, {getNotifications, addNotification})(Notification)

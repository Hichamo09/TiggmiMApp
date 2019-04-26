import { StyleSheet } from '../index'

export default StyleSheet.generate(({ styles }) => ({
  listView: {
    ...styles.listView.container
  },
  rowSeparator: {
    ...styles.listView.separator
  },
  refreshControl: {
    backgroundColor: 'transparent'
  },
  bottomLoader: {
    marginVertical: 10
  }
}))

import { StyleSheet } from 'atoms'

export default ({ colors, textTypes, metrics, fonts }) => ({
  statusBar: {},
  navBar: {
    container: {
      paddingTop: metrics.statusBarHeight,
      height: metrics.topBarHeight,
      backgroundColor: colors.topBarTint
    },
    titleContainer: {
      justifyContent: 'center',
      ios: {
        alignItems: 'center',
        flex: 2
      },
      android: {
        flex: 1,
        alignItems: 'flex-start'
      }
    },
    title: {
      color: colors.topBarTitle,
      ...textTypes.title,
      fontSize: 17,
      fontFamily: fonts.fontNames.medium
    },
    primaryActionsContainer: {},
    secondaryActionsContainer: {},
    activeActionIcon: {
      paddingVertical: 16,
      color: 'white'
    },
    inactiveActionIcon: {
      paddingVertical: 16
    },
    activeActionText: {
      color: colors.topBarItemTint,
      ...textTypes.title,
      android: {
        fontSize: 16,
        fontWeight: '500'
      }
    },
    inactiveActionText: {
      color: colors.activeIconUnfocused,
      ...textTypes.title
    }
  },
  textInput: {
    container: {
      backgroundColor: 'white',
      padding: 16
    },
    inputText: {
      ...textTypes.body2,
      fontSize: 15,
      color: colors.charcoal
    }
  },
  listView: {
    container: {
      backgroundColor: colors.listViewBackground,
      flexGrow: 1,
      flexShrink: 1
    },
    sectionItemDefaultContainer: {
      paddingTop: 8
    },
    sectionItemTextContainer: {
      height: 48,
      paddingHorizontal: 16
    },
    sectionItemText: {
      color: '#0a0a14',
      ...textTypes.subheading2
    },
    listItemDefaultContainer: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      minHeight: 48,
      flexGrow: 1,
      flexShrink: 1
    },
    listItemCompactContainer: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      minHeight: 40,
      flexGrow: 1,
      flexShrink: 1
    },
    iconTextItemTextContainer: {
      paddingLeft: 56 // 72 - 16
    },
    primaryText: {
      color: colors.primaryText,
      ...textTypes.subheading2
    },
    secondaryText: {
      color: colors.secondaryText,
      ...textTypes.body1
    },
    primaryIcon: {
      width: metrics.icon,
      height: metrics.icon
      // touchable area: 48
    },
    secondaryIcon: {
      width: metrics.icon,
      height: metrics.icon
      // touchable area: 48
    },
    primaryAvatar: {
      width: metrics.avatar,
      height: metrics.avatar
      // touchable area: 48
    },
    separator: {
      backgroundColor: colors.fossil,
      height: StyleSheet.hairlineWidth
    }
  }
})

import React from 'react'
import PropTypes from 'prop-types'
import {
  FlatList,
  RefreshControl,
  SectionList,
  ViewPropTypes
} from 'react-native'
import { View, Loader } from 'atoms'

import _omit from 'lodash/omit'
import _values from 'lodash/values'

import styles from './ListView.style'

export const ListTypes = {
  Flat: 'Flat',
  Sectioned: 'Sectioned',
  Virtualized: 'Virtualized'
}

export const ListItemSeparatorType = {
  NONE: 'NONE',
  SINGLE_LINE: 'SINGLE_LINE',
  SINGLE_LINE_ETCHED: 'SINGLE_LINE_ETCHED',
  CUSTOM: 'CUSTOM'
}

export const ListSectionSeparatorType = {
  NONE: 'NONE',
  SINGLE_LINE: 'SINGLE_LINE'
}

const defaultKeyExtractor = (item, index) => {
  if (item != null && item.key != null) {
    return item.key
  }
  return `${index}`
}

export default class ListView extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  render () {
    const { listType } = this.props
    switch (listType) {
      case ListTypes.Sectioned: {
        return this.renderSectionList()
      }
      case ListTypes.Flat: {
        return this.renderFlatList()
      }
      case ListTypes.Virtualized:
      default: {
        return null
      }
    }
  }

  renderFlatList = () => (
    <FlatList
      {...this.getCommonListProps()}
      {...this.pickFlatListProps()}
      data={this.props.data}
    />
  )

  renderSectionList = () => (
    <SectionList
      {...this.getCommonListProps()}
      {...this.pickSectionListProps()}
      SectionSeparatorComponent={this.renderSectionSeparator}
      renderSectionHeader={this.renderSectionHeader}
      renderSectionFooter={this.renderSectionFooter}
      sections={this.props.data}
    />
  )

  renderItem = ({ item, index, section }) => {
    const { renderRow } = this.props
    return renderRow(item, index, section)
  }

  renderDefaultRowSeparator = args => {
    const { leadingItem: item } = args
    switch (this.props.rowSeparatorType) {
      case ListItemSeparatorType.SINGLE_LINE: {
        const separatorStyle = this.props.rowSeparatorStyle
          ? [styles.rowSeparator, this.props.rowSeparatorStyle]
          : styles.rowSeparator
        return (
          <View
            key={`IS${this.props.keyExtractor(item)}`}
            style={separatorStyle}
          />
        )
      }
      default:
        return null
    }
  }

  renderSectionHeader = ({ section, ...otherArgs }) => {
    const { renderSectionHeader } = this.props
    if (renderSectionHeader) {
      return renderSectionHeader(section, ...otherArgs)
    }
    return null
  }

  renderSectionFooter = ({ section, ...otherArgs }) => {
    const { renderSectionFooter } = this.props
    if (renderSectionFooter) {
      return renderSectionFooter(section, ...otherArgs)
    }
    return null
  }

  renderSectionSeparator = args => {
    const { renderSectionSeparator } = this.props
    if (renderSectionSeparator) {
      return renderSectionSeparator(args)
    }
    switch (this.props.sectionSeparatorType) {
      case ListSectionSeparatorType.SINGLE_LINE: {
        const separatorStyle = this.props.sectionSeparatorStyle
          ? [styles.rowSeparator, this.props.sectionSeparatorStyle]
          : styles.rowSeparator
        return <View style={separatorStyle} />
      }
      default:
        return null
    }
  }

  renderFooter = () => {
    const { renderFooter, infiniteScrollControlEnabled } = this.props
    if (renderFooter) {
      return renderFooter()
    }
    if (infiniteScrollControlEnabled) {
      return (
        <View style={styles.bottomLoader}>
          <Loader />
        </View>
      )
    }
    return null
  }

  renderRefreshControl = () => {
    const { refreshControlEnabled } = this.props
    if (refreshControlEnabled) {
      return (
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />
      )
    }
    return null
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.props.onRefreshControl().then(() => {
      this.setState({ refreshing: false })
    })
  }

  getCommonListProps = () => {
    const { rowSeparatorType, renderRowSeparator } = this.props
    const rowSeparator =
      renderRowSeparator ||
      (rowSeparatorType !== ListItemSeparatorType.NONE
        ? this.renderDefaultRowSeparator
        : undefined)
    // TODO: optimize other props if needed..
    return {
      ref: this.setRef,
      keyboardDismissMode: 'on-drag',
      keyboardShouldPersistTaps: 'always',
      ListHeaderComponent: this.props.renderHeader,
      ListFooterComponent: this.renderFooter,
      ItemSeparatorComponent: rowSeparator,
      renderItem: this.renderItem,
      refreshControl: this.renderRefreshControl(),
      style: this.getListStyle(),
      contentContainerStyle: this.props.contentContainerStyle
    }
  }

  getListStyle = () =>
    this.props.style ? [styles.listView, this.props.style] : styles.listView

  setRef = ref => {
    this.rootRef = ref
  }

  setNativeProps = nativeProps => {
    if (this.rootRef && typeof this.rootRef.setNativeProps === 'function') {
      this.rootRef.setNativeProps(nativeProps)
    }
  }

  pickFlatListProps () {
    return _omit(this.props, [
      'renderItem',
      'renderRow',
      'ItemSeparatorComponent',
      'ListFooterComponent',
      'ListHeaderComponent',
      'style',
      'listType'
    ])
  }

  pickSectionListProps () {
    return _omit(this.props, [
      'renderItem',
      'renderRow',
      'ItemSeparatorComponent',
      'ListFooterComponent',
      'ListHeaderComponent',
      'style',
      'renderSectionHeader',
      'renderSectionFooter',
      'SectionSeparatorComponent',
      'listType'
    ])
  }
}

ListView.ListTypes = ListTypes
ListView.RowSeparatorType = ListItemSeparatorType
ListView.SectionSeparatorType = ListSectionSeparatorType

ListView.propTypes = {
  listType: PropTypes.oneOf(_values(ListTypes)),
  contentContainerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  data: PropTypes.array,
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
  keyExtractor: PropTypes.func,
  renderRow: PropTypes.func.isRequired,
  renderRowSeparator: PropTypes.func,
  rowSeparatorStyle: ViewPropTypes.style,
  rowSeparatorType: PropTypes.oneOf(_values(ListItemSeparatorType)),
  renderSectionHeader: PropTypes.func,
  renderSectionFooter: PropTypes.func,
  renderSectionSeparator: PropTypes.func,
  sectionSeparatorType: PropTypes.oneOf(_values(ListSectionSeparatorType)),
  sectionSeparatorStyle: ViewPropTypes.style,
  refreshControlEnabled: PropTypes.bool,
  onRefreshControl: PropTypes.func,
  infiniteScrollControlEnabled: PropTypes.bool
}

ListView.defaultProps = {
  listType: ListTypes.Flat,
  rowSeparatorType: ListItemSeparatorType.SINGLE_LINE,
  sectionSeparatorType: ListSectionSeparatorType.SINGLE_LINE,
  keyExtractor: defaultKeyExtractor,
  refreshControlEnabled: false,
  infiniteScrollControlEnabled: false
}

import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView as RNScrollView, ViewPropTypes } from 'react-native';
import styles from './ScrollView.style';

const ScrollView = (props) => {
  const { children, onScroll, scrollEventThrottle, style, ...otherProps } = props;
  return (
    <RNScrollView
      onScroll={onScroll}
      scrollEventThrottle={scrollEventThrottle}
      contentContainerStyle={styles.contentContainer}
      style={[styles.style, style]}
      {...otherProps}
    >
      {children}
    </RNScrollView>
  );
};

export default ScrollView;

ScrollView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  onScroll: PropTypes.func,
  scrollEventThrottle: PropTypes.number,
  style: ViewPropTypes.style
};

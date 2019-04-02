import Color from 'color'
import { StyleSheet } from 'atoms'

export const styleVariables = StyleSheet.generateVariables(({ styles }) => ({
  loader: styles.loader,
  outerLoaderColor: Color('#000')
    .alpha(0.7)
    .toString(),
  innerLoaderColor: Color('#000')
    .alpha(0.35)
    .toString()
}))

export default StyleSheet.generate(() => ({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  innerLoaderContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

/**
 * Custom Stylesheet to be used over the project
 */

import { StyleSheet as RNStyleSheet, Platform } from 'react-native'
import _mapValues from 'lodash/mapValues'
import _merge from 'lodash/merge'
import _isEmpty from 'lodash/isEmpty'

import Theme from './Theme'

function create (styles) {
  const platformStyles = {}
  Object.keys(styles).forEach(name => {
    const { ios, android, ...style } = { ...styles[name] }
    let customStyle = style
    if (ios && Platform.OS === 'ios') {
      customStyle = { ...customStyle, ...ios }
    }
    if (android && Platform.OS === 'android') {
      customStyle = { ...customStyle, ...android }
    }
    platformStyles[name] = customStyle
  })
  return RNStyleSheet.create(platformStyles)
}

class ComponentStyle {
  constructor (styleGenerator) {
    this.style = {}
    this.styleGenerator = styleGenerator
  }

  build (config) {
    return Object.assign(this.style, create(this.styleGenerator(config)))
  }
}

class StyleVariables {
  constructor (variablesGenerator) {
    this.variables = {}
    this.variablesGenerator = variablesGenerator
  }

  build (config) {
    return Object.assign(this.variables, this.variablesGenerator(config))
  }
}

class StyleSheet {
  constructor () {
    this.allStyleVariables = []
    this.allComponentStyles = []
  }

  /**
   * Function to build global level style variable which can be used in component's stylesheet generation
   * @param  {[Object]} themes                Array of theme object in form of {colors: {}, fonts: {}, metrics: {}, images: {}}
   * @param  {[type]} descriptorsGenerators   Array of descriptorsGenerators { fontDescriptors: {}, colorDescriptors: {} } which takes theme as input to generate derived variables
   * @param  {[type]} globalStylesGenerators  Array of global style generators which uses variables created using theme and descriptors to create global styles
   */
  buildGlobalVariables (themes, descriptorsGenerators, globalStylesGenerators) {
    try {
      this._reset()
      this._buildTheme(...themes)
      this._buildDescriptors(...descriptorsGenerators)
      this._buildGlobalStyles(...globalStylesGenerators)
    } catch (error) {
      this._reset()
      throw error
    }
  }

  _reset () {
    this.builded = false
    this._theme = null
    this._descriptors = null
    this._globalVariables = null
  }

  _buildTheme (...themes) {
    if (_isEmpty(themes)) {
      throw new Error('Invalid themes')
    }
    const buildedTheme = Theme.flatten(...themes)
    if (!(buildedTheme instanceof Theme)) {
      throw new Error('Invalid object type. Should be of the Theme type')
    }
    this._theme = buildedTheme
  }

  _buildDescriptors (...descriptorsGenerators) {
    if (!this.theme) {
      throw new Error('you need to set theme before using this method')
    }
    if (_isEmpty(descriptorsGenerators)) {
      throw new Error('Descriptors are mandatory')
    }
    const flattenedDescriptorsGenerator = descriptorsGenerators.reduce(
      _merge,
      {}
    )
    if (
      !flattenedDescriptorsGenerator.fontDescriptors ||
      !flattenedDescriptorsGenerator.colorDescriptors
    ) {
      throw new Error('Invalid descriptors')
    }
    this._descriptors = _mapValues(
      flattenedDescriptorsGenerator,
      descriptorGenerator => descriptorGenerator(this.theme)
    )
  }

  _buildGlobalStyles (...globalStylesGenerators) {
    if (!this.theme) {
      throw new Error('you need to set theme before using this method')
    }
    if (!this._descriptors) {
      throw new Error('you need to set descriptors before using this method')
    }
    const globalVariables = _merge({}, this.theme.toJS(), {
      colors: this.colorDescriptors,
      textTypes: this.fontDescriptors
    }) /* pass other descriptors as and when needed */
    const allStyles = globalStylesGenerators.map(styleGenerator =>
      styleGenerator(globalVariables)
    )
    const flattendedGlobalStyles = allStyles.reduce(_merge, {})
    this._globalVariables = _merge(globalVariables, {
      styles: flattendedGlobalStyles
    })
    this.allStyleVariables.map(styleVariables =>
      this._buildStyleVariables(styleVariables)
    )
    this.allComponentStyles.map(componentStyle =>
      this._buildComponentStyle(componentStyle)
    )
    this.builded = true
  }

  _buildComponentStyle (componentStyle) {
    componentStyle.build(this.globalVariables)
  }

  _buildStyleVariables (styleVariables) {
    styleVariables.build(this.globalVariables)
  }

  get theme () {
    return this._theme
  }

  get descriptors () {
    return this._descriptors
  }

  get fontDescriptors () {
    return this.descriptors.fontDescriptors
  }

  get colorDescriptors () {
    return this.descriptors.colorDescriptors
  }

  get globalVariables () {
    return this._globalVariables
  }

  create (styles) {
    return create(styles)
  }

  /**
   * generate the stylesheet with given generator function
   * @param  {[Function]} styleGenerator A function which takes global style variables such as colors, fonts, metrics, images, textTypes, styles as inputs and return the generated stylesheet
   * @return {Object} returns the generated style
   */
  generate (styleGenerator) {
    const componentStyle = new ComponentStyle(styleGenerator)
    this.allComponentStyles.push(componentStyle)
    if (this.builded) {
      this._buildComponentStyle(componentStyle)
    }
    return componentStyle.style
  }

  /**
   * generate the style variables with given generator function
   * @param  {[Function]} variablesGenerator A function which takes global style variables such as colors, fonts, metrics, images, textTypes, styles as inputs and return the generated variables
   * @return {Object} returns the generated variables
   */
  generateVariables (variablesGenerator) {
    const styleVariables = new StyleVariables(variablesGenerator)
    this.allStyleVariables.push(styleVariables)
    if (this.builded) {
      this._buildStyleVariables(styleVariables)
    }
    return styleVariables.variables
  }

  get hairlineWidth () {
    return RNStyleSheet.hairlineWidth
  }
}

module.exports = new StyleSheet()

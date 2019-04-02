import _merge from 'lodash/merge'

class Theme {
  constructor ({ colors, fonts, metrics, images }) {
    this.colors = colors || {}
    this.fonts = fonts || {}
    this.metrics = metrics || {}
    this.images = images || {}
  }

  static flatten (...themes) {
    return new Theme(themes.reduce(_merge, {}))
  }

  toJS () {
    return {
      colors: this.colors,
      fonts: this.fonts,
      metrics: this.metrics,
      images: this.images
    }
  }
}

module.exports = Theme

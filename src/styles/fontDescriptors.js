export function fontMixin (
  fontFamily,
  fontSize,
  otherAttributes,
  sizeMultiplier = 1.0
) {
  return {
    fontFamily,
    fontSize: fontSize * sizeMultiplier,
    ...otherAttributes
  }
}

export default ({ fonts: { sizes, fontNames } }) => ({
  display3: fontMixin(fontNames.regular, sizes.display3, {
    lineHeight: sizes.display3 * 1.33
  }),
  display2: fontMixin(fontNames.regular, sizes.display2, {
    lineHeight: sizes.display2 * 1.33
  }),
  display1: fontMixin(fontNames.regular, sizes.display1, {
    lineHeight: sizes.display1 * 1.33
  }),
  headline: fontMixin(fontNames.regular, sizes.headline, {
    lineHeight: sizes.headline * 1.33
  }),
  title: fontMixin(fontNames.medium, sizes.title),
  subheading3: fontMixin(fontNames.regular, sizes.subheading3, {
    lineHeight: sizes.subheading3 * 1.8
  }),
  subheading2: fontMixin(fontNames.regular, sizes.subheading2, {
    lineHeight: sizes.subheading2 * 1.7
  }),
  subheading1: fontMixin(fontNames.regular, sizes.subheading1, {
    lineHeight: sizes.subheading1 * 1.6
  }),
  body2: fontMixin(fontNames.regular, sizes.body2, {
    lineHeight: sizes.body2 * 1.7
  }),
  body1: fontMixin(fontNames.regular, sizes.body1, {
    lineHeight: sizes.body1 * 1.5
  }),
  caption2: fontMixin(fontNames.regular, sizes.caption2),
  caption1: fontMixin(fontNames.regular, sizes.caption1),
  button: fontMixin(fontNames.medium, sizes.button),
  denseButton: fontMixin(fontNames.medium, sizes.denseButton)
})

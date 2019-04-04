const getLocalizedString = (stringToLocalise, locale = 'en') => {
  let localizedStrings
  switch (locale) {
    case 'en-US':
    case 'en':
      localizedStrings = require('./locales/en-US.json')
      break
    default:
      localizedStrings = require('./locales/en-US.json')
      break
  }
  return localizedStrings && localizedStrings[stringToLocalise]
}

module.exports = {
  getLocalizedString
}

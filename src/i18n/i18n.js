const fs = require('fs')
const exec = require('child_process').exec

const extractEntityFromBundle = () => {
  fs.readFile('ios/main.jsbundle', 'utf8', (err, data) => {
    if (err) {
      return
    }
    const stringifiedData = data && data.toString()
    const matchesSingleQuotes = stringifiedData.match(
      /\_\_\(\s*\'([^\"]+?)\'\s*\)/g
    )
    const matchesDoubleQoutes = stringifiedData.match(
      /\_\_\(\s*\"([^\"]+?)\"\s*\)/g
    )
    let resultedArray = matchesDoubleQoutes || []
    if (matchesSingleQuotes) {
      resultedArray = matchesSingleQuotes.concat(resultedArray)
    }
    const uniqueValues = new Set()
    let reducedResult = resultedArray.reduce((result, value) => {
      const parsedValue = value.substr(4, value.length - 6)
      if (uniqueValues.has(parsedValue)) {
        return result
      }
      uniqueValues.add(parsedValue)
      return `${result}"${parsedValue}\" : \"${parsedValue}\",\n`
    }, '')
    reducedResult = `{\n${reducedResult}\n}`
    fs.writeFile(
      'src/I18n/locales/en-US.json',
      reducedResult,
      'utf-8',
      error => {
        if (!error) {
          console.log('Success : Localization!!')
        }
      }
    )
  })
}

exec(
  'react-native bundle --dev false --entry-file index.js --bundle-output ios/main.jsbundle --platform ios',
  err => {
    if (err) {
      console.log('Error: ', err)
      return
    }
    console.log('Wait...')
    extractEntityFromBundle()
  }
)

const Blocks = {
  get Button() { return require('./Button'); },
  get ListView() { return require('./ListView'); },
  get StyleSheet() { return require('react-native').StyleSheet; },
  get Loader() { return require('./Loader'); },
  get Text() { return require('./Text'); },
  get ScrollView() { return require('./ScrollView'); },
  get View() {return require('react-native').View;},
  get Image() { return require('./Image'); },
  get TextInput() { return require('./TextInput'); }
};

module.exports = Blocks;

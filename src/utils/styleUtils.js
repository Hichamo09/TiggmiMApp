import { StyleSheet } from '../atoms';
import baseTheme from '../styles/baseTheme';
import appTheme from '../styles/appTheme';
import fontDescriptors, { fontMixin } from '../styles/fontDescriptors';
import colorDescriptors from '../styles/colorDescriptors';
import globalStyles from '../styles/globalStyles';

function buildGlobalStyles() {
  StyleSheet.buildGlobalVariables([baseTheme, appTheme], [{ fontDescriptors, colorDescriptors }], [globalStyles]);
}

module.exports = {
  fontMixin,
  buildGlobalStyles
};

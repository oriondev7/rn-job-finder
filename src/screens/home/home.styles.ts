import { StyleSheet, Platform, StatusBar } from 'react-native'
import { COLORS, SIZES } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },

  separator: {
    padding: Platform.OS === 'ios' ? 8 : StatusBar.currentHeight,
  },

  scrollView: {
    flex: 1,
    padding: SIZES.medium,
  },
})

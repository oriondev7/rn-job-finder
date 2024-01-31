import { Platform, StatusBar, StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from '../../constants'

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },

  separator: {
    padding: Platform.OS === 'ios' ? 8 : StatusBar.currentHeight,
  },

  container: {
    width: '100%',
  },

  contentContainer: {
    padding: SIZES.medium,
    rowGap: SIZES.medium,
  },

  searchTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },

  noOfSearchedJobs: {
    marginTop: 2,
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },

  loaderContainer: {
    marginTop: SIZES.medium,
  },

  footerContainer: {
    marginTop: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  paginationTextBox: {
    width: 30,
    height: 30,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },

  paginationText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },

  errorText: {
    color: COLORS.gray,
  },
})

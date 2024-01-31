import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../../../constants'

export const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },

  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },

  errorText: {
    color: COLORS.gray,
  },
})

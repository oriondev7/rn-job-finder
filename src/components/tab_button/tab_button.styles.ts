import { StyleSheet } from 'react-native'
import { COLORS, SHADOWS, SIZES } from '../../constants'

export const styles = StyleSheet.create({
  btn: {
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },

  btnText: {
    fontFamily: 'DMMedium',
    fontSize: SIZES.small,
  },
})

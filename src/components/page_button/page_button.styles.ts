import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export const styles = StyleSheet.create({
  paginationButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.tertiary,
  },

  paginationImage: {
    width: '60%',
    height: '60%',
    tintColor: COLORS.white,
  },
})

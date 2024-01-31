import { DimensionValue, ImageSourcePropType } from 'react-native'

export interface ScreenHeaderBtnProps {
  iconURL: ImageSourcePropType
  dimension: DimensionValue
  onPress?: () => void
}

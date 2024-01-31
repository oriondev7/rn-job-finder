import { TouchableOpacity, Image } from 'react-native'
import { styles } from './screen_header.styles'
import { FC } from 'react'
import { ScreenHeaderBtnProps } from './screen_header.types'

export const ScreenHeaderBtn: FC<ScreenHeaderBtnProps> = ({
  iconURL,
  dimension,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Image
        source={iconURL}
        resizeMode="cover"
        style={[
          styles.btnImg,
          {
            width: dimension,
            height: dimension,
          },
        ]}
      />
    </TouchableOpacity>
  )
}

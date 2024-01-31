import { TouchableOpacity, Image } from 'react-native'
import { styles } from './screen_header.styles'

export const ScreenHeaderBtn = ({ iconURL, dimension, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.btnContainer}
      onPress={onPress}
    >
      <Image
        source={iconURL} 
        resizeMode='cover'
        style={[
          styles.btnImg, {
            width: dimension,
            height: dimension
          }
        ]}
      />
    </TouchableOpacity>
  )
}

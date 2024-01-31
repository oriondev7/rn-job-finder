import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import { styles } from './footer.styles'
import { icons } from '../../../../constants'
import { FC } from 'react'
import { FooterProps } from './footer.types'

export const Footer: FC<FooterProps> = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

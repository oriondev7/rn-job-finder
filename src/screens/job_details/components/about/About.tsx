import { View, Text } from 'react-native'
import { styles } from './about.styles'
import { FC } from 'react'
import { AboutProps } from './about.types'

export const About: FC<AboutProps> = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  )
}

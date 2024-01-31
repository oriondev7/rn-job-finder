import { View, Text } from 'react-native'
import { styles } from './specifics.styles'
import { FC } from 'react'
import { SpecificsProps } from './specifics.types'

export const Specifics: FC<SpecificsProps> = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />

            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

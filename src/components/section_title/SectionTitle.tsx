import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './section_title.styles'
import { FC } from 'react'
import { SectionTitleProps } from './section_title.types'

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>

      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
      </TouchableOpacity>
    </View>
  )
}

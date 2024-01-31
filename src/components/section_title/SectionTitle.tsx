import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./section_title.styles"

export const SectionTitle = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
      </TouchableOpacity>
    </View>
  )
}

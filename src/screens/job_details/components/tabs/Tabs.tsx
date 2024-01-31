import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { COLORS, SIZES } from '../../../../constants'
import { styles } from './tabs.styles'

const TabButton = ({ name, activeTab, onPress }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.btn, {
          backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",  
        }
      ]}
      onPress={onPress}
    >
      <Text style={[styles.btnText, {
        color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
      }]}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export const Tabs = ({
  tabs,
  activeTab,
  setActiveTab
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onPress={() => setActiveTab(item)}
          />
        )}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2}}
      />
    </View>
  )
}

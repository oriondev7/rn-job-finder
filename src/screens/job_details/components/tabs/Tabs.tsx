import { View, FlatList } from 'react-native'
import { SIZES } from '../../../../constants'
import { styles } from './tabs.styles'
import { FC } from 'react'
import { TabsProps } from './tabs.types'
import { TabButton } from '../../../../components'

export const Tabs: FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
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
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
}

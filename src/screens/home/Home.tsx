import { useState } from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { Welcome, PopularJobs, NearbyJobs } from './components'
import { styles } from './home.styles'

export const Home = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollView}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={() => {
              if (searchTerm) {
                navigation.navigate('Search', { searchTitle: searchTerm })
              }
            }}
          />
          <PopularJobs navigation={navigation} />
          <NearbyJobs navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

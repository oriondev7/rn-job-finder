import { useState } from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome, PopularJobs, NearbyJobs } from './components'
import { styles } from './home.styles'

const Stack = createNativeStackNavigator()

export const Home = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.separator} />
      
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.scrollView}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={() => {
              if(searchTerm) {
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

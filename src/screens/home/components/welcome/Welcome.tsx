import { FC, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import { styles } from './welcome.styles'
import { COLORS, icons, JobType, SIZES } from '../../../../constants'
import { useNavigation } from '@react-navigation/native'
import { WelcomeProps } from './welcome.types'

const jobTypes = Object.values(JobType)

export const Welcome: FC<WelcomeProps> = ({
  searchTerm,
  setSearchTerm,
  onSearch,
}) => {
  const navigation = useNavigation()
  const [selectedJobType, setSelectedJobType] = useState(JobType.fullTime)

  const selectJobType = (item: JobType) => {
    setSelectedJobType(item)
    navigation.navigate('Search', { searchTitle: item })
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Bob</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => {
              setSearchTerm(text)
            }}
            placeholder="React Native Developer"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={onSearch}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.tab,
                {
                  borderColor:
                    selectedJobType === item ? COLORS.secondary : COLORS.gray2,
                },
              ]}
              onPress={() => selectJobType(item)}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    color:
                      selectedJobType === item
                        ? COLORS.secondary
                        : COLORS.gray2,
                  },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { COLORS, SIZES } from '../../../../constants'
import { PopularJobCard, SectionTitle } from '../../../../components'
import { styles } from './popular_jobs.styles'
import { useFetch } from '../../../../hooks/useFetch'

export const PopularJobs = ({ navigation }) => {
  const { data, isLoading, error } = useFetch('search', {
    query: 'React Native Developer',
    num_pages: 1,
  })

  const [selectedJob, setSelectedJob] = useState('')

  const showJobDetails = (jobID: string) => {
    navigation.navigate('JobDetails', { id: jobID })
    setSelectedJob(jobID)
  }

  return (
    <View style={styles.container}>
      <SectionTitle title={'Popular Jobs'} />

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.errorText}>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                selectedJobId={selectedJob}
                item={item}
                onPress={() => showJobDetails(item?.job_id)}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  )
}

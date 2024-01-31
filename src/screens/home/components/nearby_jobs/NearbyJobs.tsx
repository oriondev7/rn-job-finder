import { View, Text, ActivityIndicator } from 'react-native'
import { COLORS } from '../../../../constants'
import { NearbyJobCard, SectionTitle } from '../../../../components'
import { styles } from './nearby_jobs.styles'
import { useFetch } from '../../../../hooks/useFetch'

export const NearbyJobs = ({ navigation }) => {
  const { data, isLoading, error } = useFetch('search', {
    query: 'React Developer',
    num_pages: 1,
  })

  const showJobDetails = (jobID: string) =>
    navigation.navigate('JobDetails', { id: jobID })

  return (
    <View style={styles.container}>
      <SectionTitle title={'Nearby Jobs'} />

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.errorText}>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              onPress={() => showJobDetails(job?.job_id)}
            />
          ))
        )}
      </View>
    </View>
  )
}

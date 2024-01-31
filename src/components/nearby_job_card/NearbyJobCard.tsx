import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './nearby_job_card.style'
import { images } from '../../constants'
import { checkImageURL } from '../../utils'
import { FC } from 'react'
import { NearbyJobCardProps } from './nearby_job_card.types'

export const NearbyJobCard: FC<NearbyJobCardProps> = ({ job, onPress }) => {
  const employerLogo = job.employer_logo

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(employerLogo)
              ? employerLogo
              : images.logoPlaceholder,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>

        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

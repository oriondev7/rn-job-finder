import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './popular_job_card.style'
import { COLORS, images } from '../../constants'
import { checkImageURL } from '../../utils'
import { FC } from 'react'
import { PopularJobCardProps } from './popular_job_card.types'

export const PopularJobCard: FC<PopularJobCardProps> = ({
  item,
  selectedJobId,
  onPress,
}) => {
  const employerLogo = item.employer_logo

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            selectedJobId === item.job_id ? COLORS.primary : '#FFF',
        },
      ]}
      onPress={onPress}
    >
      <TouchableOpacity
        style={[
          styles.logoContainer,
          {
            backgroundColor:
              selectedJobId === item.job_id ? '#FFF' : COLORS.white,
          },
        ]}
      >
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

      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text
          style={[
            styles.jobName,
            {
              color:
                selectedJobId === item.job_id ? COLORS.white : COLORS.primary,
            },
          ]}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>

        <View style={styles.infoWrapper}>
          <Text
            style={[
              styles.publisher,
              {
                color:
                  selectedJobId === item.job_id ? COLORS.white : COLORS.primary,
              },
            ]}
          >
            {item?.job_publisher} -
          </Text>

          <Text style={styles.location}>{item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

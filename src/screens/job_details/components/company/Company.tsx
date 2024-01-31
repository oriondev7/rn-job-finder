import { View, Text, Image } from 'react-native'
import { styles } from './company.styles'
import { icons, images } from '../../../../constants'
import { checkImageURL } from '../../../../utils'
import { FC } from 'react'
import { CompanyProps } from './company.types'

export const Company: FC<CompanyProps> = ({
  logo,
  jobTitle,
  companyName,
  location,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{ uri: checkImageURL(logo) ? logo : images.logoPlaceholder }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>

        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />

          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

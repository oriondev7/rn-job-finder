import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import { About, Company, Footer, Specifics, Tabs } from './components'
import { COLORS, Tab } from '../../constants'
import { useFetch } from '../../hooks/useFetch'
import { styles } from './job_details.styles'

const tabs = Object.values(Tab)

export const JobDetails = ({ route }) => {
  const params = route.params
  const [refreshing, setRefreshing] = useState(false)
  const [activeTab, setActiveTab] = useState(tabs[0])

  const { data, isLoading, error, refetch } = useFetch('job-details', {
    job_id: params.id,
  })

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    refetch()
  }, [])

  useEffect(() => {
    if (isLoading === false) {
      setRefreshing(false)
    }
  }, [isLoading])

  const displayTabContent = () => {
    const nA = ['N/A']

    switch (activeTab) {
      case Tab.qualifications:
        return (
          <Specifics
            title={Tab.qualifications}
            points={data[0].job_highlights?.Qualifications ?? nA}
          />
        )
      case Tab.about:
        return <About info={data[0].job_description ?? 'No data provided'} />
      case Tab.responsibilities:
        return (
          <Specifics
            title={Tab.responsibilities}
            points={data[0].job_highlights?.Responsibilities ?? nA}
          />
        )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          refreshing ? (
            <></>
          ) : (
            <ActivityIndicator size="large" color={COLORS.primary} />
          )
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data</Text>
        ) : (
          <View style={styles.companyContainer}>
            <Company
              logo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />

            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
        )}
      </ScrollView>

      <Footer
        url={
          data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'
        }
      />
    </SafeAreaView>
  )
}

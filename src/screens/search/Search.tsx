import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'
import { NearbyJobCard, PageButton } from '../../components'
import { COLORS, Direction } from '../../constants'
import { styles } from './search.styles'
import { Job } from '../../models'

export const Search = ({ navigation, route }) => {
  const searchTitle = route.params.searchTitle
  const [searchResult, setSearchResult] = useState<Job[]>([])
  const [searchLoader, setSearchLoader] = useState(false)
  const [searchError, setSearchError] = useState(null)
  const [page, setPage] = useState(1)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    url: `https://jsearch.p.rapidapi.com/search`,
    params: {
      query: searchTitle,
      page: page.toString(),
    },
  }

  const handleSearch = async () => {
    setSearchLoader(true)
    setSearchResult([])

    try {
      const response = await axios.request(options)
      setSearchResult(response.data.data)
    } catch (error) {
      setSearchError(error)
    } finally {
      setSearchLoader(false)
    }
  }

  const handlePagination = (direction: Direction) => {
    if (direction === Direction.left && page > 1) {
      setPage(page - 1)
      handleSearch()
    } else if (direction === Direction.right) {
      setPage(page + 1)
      handleSearch()
    }
  }

  useEffect(() => {
    handleSearch()
  }, [])

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <NearbyJobCard
            job={item}
            onPress={() =>
              navigation.navigate('JobDetails', { id: item.job_id })
            }
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.searchTitle}>{searchTitle}</Text>
              <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
            </View>

            <View style={styles.loaderContainer}>
              {searchLoader ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
              ) : (
                searchError && (
                  <Text style={styles.errorText}>
                    Oops something went wrong
                  </Text>
                )
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
            <PageButton
              type={Direction.left}
              onPress={() => handlePagination(Direction.left)}
            />

            <View style={styles.paginationTextBox}>
              <Text style={styles.paginationText}>{page}</Text>
            </View>

            <PageButton
              type={Direction.right}
              onPress={() => handlePagination(Direction.right)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

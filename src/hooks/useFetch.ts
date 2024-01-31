import { useState, useEffect } from 'react'
import axios from 'axios'
import { Alert } from 'react-native'
import { Job, JobDetailsQuery, SearchQuery } from '../models'

export const useFetch = (
  endpoint: string,
  query: JobDetailsQuery | SearchQuery
) => {
  const [data, setData] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
  }

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.request(options)
      setData(response.data.data)
    } catch (error) {
      setError(error)
      Alert.alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

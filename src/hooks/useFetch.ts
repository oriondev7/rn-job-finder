import { useState, useEffect } from "react";
import axios from 'axios'
// import { RAPID_API_KEY } from '@env'
import { Alert } from "react-native";

// const rapidAPIKey = RAPID_API_KEY

export const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  console.log(query)
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query }
  };

  const fetchData = async () => {
    setIsLoading(true)

    try {
      // const response = await axios.request(options)
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

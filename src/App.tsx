import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home, JobDetails, Search } from './screens'
import { ScreenHeaderBtn } from './components'
import { COLORS, icons, images } from './constants'

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconURL={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconURL={images.profile} dimension="100%" />
            ),
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="JobDetails"
          component={JobDetails}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconURL={icons.left}
                dimension={'60%'}
                onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconURL={icons.share} dimension={'60%'} />
            ),
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconURL={icons.left}
                dimension={'60%'}
                onPress={() => navigation.goBack()}
              />
            ),
            headerTitle: '',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

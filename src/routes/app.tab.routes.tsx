import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../screens/Home'
import { MyCars } from '../screens/MyCars';
import { Profile } from '../screens/Profile';
import { AppStackRoutes } from './app.stack.routes';
import { useTheme } from 'styled-components'
import { Platform } from 'react-native'

import { Feather, FontAwesome5 } from '@expo/vector-icons'


const { Navigator, Screen } = createBottomTabNavigator();


export function AppTabRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          backgroundColor: theme.colors.background_primary
        }
      }}
    >
      <Screen
        name="HomeTab"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
           <Feather name={"home"} size={24} color={color} />
          )
        }}
      />

      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"car"} size={24} color={color} />
            )
        }}
      />
        <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"users"} size={24} color={color} />
          )
        }}
      />
    </Navigator>
  )
}

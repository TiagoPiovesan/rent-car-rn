import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Scheduling } from '../screens/Scheduling'
import { Confirmation } from '../screens/Confirmation'
import { CarDetails } from '../screens/CarDetails';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createStackNavigator();


export function AppStackRoutes(){
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        // presentation: 'modal',
        animationEnabled: true,
      }}
      initialRouteName="Home"
      >
      <Screen
        name="Splash"
        component={Splash}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
      />
      <Screen
        name="Confirmation"
        component={Confirmation}
      />
      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
      />
      <Screen
        name="CarDetails"
        component={CarDetails}
      />
    </Navigator>
  )
}

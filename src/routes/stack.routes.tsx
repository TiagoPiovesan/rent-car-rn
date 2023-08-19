import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Scheduling } from '../screens/Scheduling'
import { SchedulingComplete } from '../screens/SchedulingComplete'
import { CarDetails } from '../screens/CarDetails';
import { SchedulingDetails } from '../screens/SchedulingDetails';


const { Navigator, Screen } = createStackNavigator();


export function StackRoutes(){
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        presentation: 'modal',
        animationEnabled: true,
      }}>
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
      />
      <Screen
        name="SchedulingComplete"
        component={SchedulingComplete}
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

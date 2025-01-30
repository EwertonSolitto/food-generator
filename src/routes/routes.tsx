import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Home from '../screens/home';
import Burger from '../screens/burger';
import Pasta from '../screens/pasta';
import Pizza from '../screens/pizza';

import colors from '../styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {
  return (
    <Navigator 
      initialRouteName='Food'
      screenOptions={{
      headerShown: false,
      headerBackgroundContainerStyle: {
        backgroundColor: colors.secondary
      },
      tabBarStyle: {
        height: 64,
        borderTopWidth: 0,
      },
      tabBarInactiveTintColor: "#c4c4c4",
      tabBarInactiveBackgroundColor: colors.secondary,
      tabBarActiveBackgroundColor: colors.primary,
      tabBarShowLabel: false,
      tabBarIconStyle: {
        height: 48,
        width: 48
      },
    }}>
      <Screen 
        name="Food" 
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="food" size={40} color={color}/>
          ),
          tabBarActiveTintColor: "#0B77D5"
        }} 
      />
      <Screen 
        name="Burger" 
        component={Burger}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="hamburger" size={40} color={color}/>
          ),
          tabBarActiveTintColor: "#44AA0E"
        }} 
      />
      <Screen 
        name="Pasta" 
        component={Pasta}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="pasta" size={40} color={color}/>
          ),
          tabBarActiveTintColor: "#E11414"
        }} 
      />
      <Screen 
        name="Pizza" 
        component={Pizza}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="pizza" size={40} color={color}/>
          ),
          tabBarActiveTintColor: "#ECB309"
        }} 
      />
    </Navigator>
  );
}
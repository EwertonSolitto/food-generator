import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Home from '../screens/home';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {

  
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen 
        name="Foods" 
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="food" size={size} color={color}/>
          )
        }} 
      />
    </Navigator>
  );
}
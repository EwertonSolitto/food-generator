import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
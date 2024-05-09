import {
  MaterialTopTabBarProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import {FlightNumberSearchScreen} from '../screens/FlightNumberSearchScreen';
import {DestinationSearchScreen} from '../screens/DestinationSearchScreen';
import {TabBarSearch} from '../components/TabBarSearch';

export type RootTabScreenList = {
  FlightNumberSearchScreen: undefined;
  DestinationSearchScreen: undefined;
};
const Tab = createMaterialTopTabNavigator<RootTabScreenList>();

export const TopTabSearchTypeNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props: MaterialTopTabBarProps) => <TabBarSearch {...props} />}
      screenOptions={{
        swipeEnabled: false,
      }}
      sceneContainerStyle={{
        backgroundColor: '#FFF',
      }}>
      <Tab.Screen
        name="FlightNumberSearchScreen"
        component={FlightNumberSearchScreen}
      />
      <Tab.Screen
        name="DestinationSearchScreen"
        component={DestinationSearchScreen}
      />
    </Tab.Navigator>
  );
};

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TopTabSearchTypeNavigator} from './SearcherNavigator';
import {FlightDetails} from '../screens/FlightDetails';
import {FlightResults} from '../screens/FlightResults';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  TopTabSearchTypeNavigator: undefined;
  FlightResults: undefined;
  FlightDetails: undefined;
};

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#FFF',
        },
      }}>
      <Stack.Screen
        name="TopTabSearchTypeNavigator"
        component={TopTabSearchTypeNavigator}
      />
      <Stack.Screen name="FlightResults" component={FlightResults} />
      <Stack.Screen name="FlightDetails" component={FlightDetails} />
    </Stack.Navigator>
  );
};

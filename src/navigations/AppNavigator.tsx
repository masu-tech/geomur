import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import LeaveScreen from '@/screens/PostScreen';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Group>
          <RootStack.Screen name="TabNav" component={TabNavigator} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{
            presentation: 'modal',
            headerShown: true,
            headerLeftLabelVisible: false,
          }}
        >
          <RootStack.Screen name="Leave" component={LeaveScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

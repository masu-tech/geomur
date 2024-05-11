import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import PostScreen from '@/screens/PostScreen';

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
            headerTitle: 'メッセージを残す',
            headerLeftLabelVisible: false,
          }}
        >
          <RootStack.Screen name="Post" component={PostScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

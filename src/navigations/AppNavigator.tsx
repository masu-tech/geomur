import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '@/screens/HomeScreen';
import LeaveScreen from '@/screens/LeaveScreen';
import UserScreen from '@/screens/UserScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
        initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
            ),
        }}
        />
      <Tab.Screen name="Leave" component={LeaveScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-outline" size={size} color={color} />
                    ),
                }}
      />
      <Tab.Screen name="User" component={UserScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={size} color={color} />
                ),
            }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
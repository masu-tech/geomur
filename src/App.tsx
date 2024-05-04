import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from '@/navigations/AppNavigator';

Amplify.configure(awsconfig);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppNavigator />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

registerRootComponent(App);
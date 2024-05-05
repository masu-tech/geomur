import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import MainScreen from '@/screens/MainScreen';

Amplify.configure(awsconfig);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

registerRootComponent(App);

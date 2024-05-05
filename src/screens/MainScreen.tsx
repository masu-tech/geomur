import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from '@/navigations/AppNavigator';
import { PostButton } from '@/components/PostButton';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default MainScreen;

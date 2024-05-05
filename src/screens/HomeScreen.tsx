import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { PostButton } from '@/components/PostButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>ホーム画面</Text>
      </ScrollView>
      <PostButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;

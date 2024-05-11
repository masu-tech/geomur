import React from 'react';
import { TouchableOpacity, View, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNav } from '@/hooks/useNav';

export const PostButton: React.FC = () => {
  const navigation = useNav();

  const handleLeavePress = () => {
    navigation.navigate('Post');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLeavePress}>
        <Icon name="text-box-plus-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '85%',
    right: '10%',
  },
  button: {
    backgroundColor: '#38beff',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: Platform.OS === 'android' ? 5 : 0, // Androidの場合は影をつける
    shadowOpacity: Platform.OS === 'ios' ? 0.5 : 0, // iOSの場合は影をつける
    shadowRadius: Platform.OS === 'ios' ? 5 : 0, // iOSの場合は影をつける
    shadowColor: '#000', // 影の色
    shadowOffset: { width: 5, height: 4 }, // 影のオフセット
  },
});

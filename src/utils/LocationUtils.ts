import * as Location from 'expo-location';

export const getCurrentUserLocation = async () => {
  try {
    // ユーザーに位置情報の使用許可を求める
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      throw new Error('Permission to access location was denied');
    }

    // 現在の位置情報を取得
    let location = await Location.getCurrentPositionAsync({});
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  } catch (error) {
    console.error('Error getting location:', error);
    throw error;
  }
};

import { getCurrentUserLocation } from '@/utils/LocationUtils';
import * as Location from 'expo-location';

jest.mock('expo-location', () => ({
  requestForegroundPermissionsAsync: jest.fn(),
  getCurrentPositionAsync: jest.fn(),
}));

describe('getCurrentUserLocation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('許可が与えられた場合、現在の位置情報を返す', async () => {
    const mockCoords = {
      latitude: 37.7749,
      longitude: -122.4194,
    };

    (Location.requestForegroundPermissionsAsync as jest.Mock).mockResolvedValue({
      status: 'granted',
    });

    (Location.getCurrentPositionAsync as jest.Mock).mockResolvedValue({
      coords: mockCoords,
    });

    const location = await getCurrentUserLocation();

    expect(location).toEqual(mockCoords);
    expect(Location.requestForegroundPermissionsAsync).toHaveBeenCalled();
    expect(Location.getCurrentPositionAsync).toHaveBeenCalled();
  });

  it('許可が拒否された場合、エラーをスローする', async () => {
    (Location.requestForegroundPermissionsAsync as jest.Mock).mockResolvedValue({
      status: 'denied',
    });

    await expect(getCurrentUserLocation()).rejects.toThrow(
      'Permission to access location was denied'
    );
    expect(Location.requestForegroundPermissionsAsync).toHaveBeenCalled();
    expect(Location.getCurrentPositionAsync).not.toHaveBeenCalled();
  });

  it('位置情報の取得に失敗した場合、エラーをスローする', async () => {
    (Location.requestForegroundPermissionsAsync as jest.Mock).mockResolvedValue({
      status: 'granted',
    });

    const mockError = new Error('Location error');
    (Location.getCurrentPositionAsync as jest.Mock).mockRejectedValue(mockError);

    await expect(getCurrentUserLocation()).rejects.toThrow('Location error');
    expect(Location.requestForegroundPermissionsAsync).toHaveBeenCalled();
    expect(Location.getCurrentPositionAsync).toHaveBeenCalled();
  });
});

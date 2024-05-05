import { NavigationProp, useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '@/types/RootStackParamList';

export const useNav = useNavigation<NavigationProp<RootStackParamList>>;

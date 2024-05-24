module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|expo|@expo(nent)?/.*|@expo-google-fonts/.*|expo-asset|expo-file-system|expo-font|expo-web-browser|expo-splash-screen|@unimodules|unimodules-*|@unimodules/.*|react-native-svg|react-native-reanimated|react-native-gesture-handler|@react-navigation/.*)',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // 必要に応じてパスを調整
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};

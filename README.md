# Geomur

## expo起動

`npx expo start`

## ディレクトリ構成

```
src
├── assets（アイコンや画像など）
│   ├── images
│   ├── fonts
│   └── ...
├── components（部品単位のコンポーネント）
│   ├── Button.js
│   ├── Header.js
│   └── ...
├── hooks（Hooks関連）
│   ├── useAuth.js
│   └── ...
├── navigations（ナビゲーション）
│   ├── AppNavigator.js
│   └── ...
├── screens（画面単位のコンポーネント）
│   ├── HomeScreen.js
│   ├── ProfileScreen.js
│   └── ...
├── types（型定義）
│   ├── index.d.ts
│   └── ...
├── utils（APIや共通メソッドなど）
│   ├── api.js
│   ├── helpers.js
├── types（型定義）
│   ├── index.d.ts
│   └── ...
tests
├── components
├── screens
├── utils
├── e2e
```

## テスト

#### ユニットテスト

```sh
npm test
```

#### E2Eテスト

```sh
npm run detox build --configuration ios.sim.debug
npm run detox test --configuration ios.sim.debug
```

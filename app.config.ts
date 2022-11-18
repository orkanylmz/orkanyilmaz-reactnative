import type { ConfigContext, ExpoConfig } from '@expo/config';

import { Config } from './config/config.js';
export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Config.name,
  description: `${Config.name} Mobile App`,
  slug: 'upayments',
  version: Config.version.toString(),
  orientation: 'portrait',
  icon: Config.icon,
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#FFFFFF',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Config.scheme,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: Config.foregroundImage,
      backgroundColor: '#FFFFFF',
    },
    package: Config.scheme,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    [
      '@bacons/link-assets',
      [
        './assets/fonts/Poppins-Bold.ttf',
        './assets/fonts/Poppins-Light.ttf',
        './assets/fonts/Poppins-Medium.ttf',
        './assets/fonts/Poppins-Regular.ttf',
        './assets/fonts/Poppins-SemiBold.ttf',
        './assets/fonts/Poppins-Thin.ttf',
      ],
    ],
  ],
});

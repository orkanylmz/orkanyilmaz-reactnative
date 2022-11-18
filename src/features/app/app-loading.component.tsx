import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import type { ReactNode } from 'react';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';

export type TaskResult<T = unknown> = [string, T];
export type Task = () => Promise<TaskResult | null>;

export interface ApplicationLoaderProps {
  fonts: {
    [key: string]: number;
  };
  assets?: number[];
  children: ReactNode;
}

const AppLoading = (props: ApplicationLoaderProps) => {
  const [loaded] = useFonts(props.fonts);

  useEffect(() => {
    async function init() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.warn(error);
      }
    }

    init();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {props.children}
    </View>
  );
};

export default AppLoading;

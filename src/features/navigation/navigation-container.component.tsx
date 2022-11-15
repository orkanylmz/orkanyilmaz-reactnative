import type { RootStackParamList } from "@features/navigation/types";
import {
  createNavigationContainerRef,
  DefaultTheme,
  NavigationContainer as RNNavigationContainer,
} from "@react-navigation/native";
import type { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName]
): void {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    navigationRef.navigate(name, params);
  }
}

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export const NavigationContainer = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <RNNavigationContainer theme={navigatorTheme} ref={navigationRef}>
        {children}
      </RNNavigationContainer>
    </SafeAreaProvider>
  );
};

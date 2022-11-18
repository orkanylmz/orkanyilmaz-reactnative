import NetInfo from "@react-native-community/netinfo";
import {
  onlineManager,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 3 } },
});

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(Boolean(state.isConnected));
  });
});

interface APIProviderProps {
  children: ReactNode;
}

export const APIProvider = ({ children }: APIProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

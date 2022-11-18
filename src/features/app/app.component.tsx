import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { APIProvider } from '@/api';
import AppLoading from '@/features/app/app-loading.component';
import { RootNavigator } from '@/features/navigation';

const fonts = {
  'Poppins-Bold': require('@assets/fonts/Poppins-Bold.ttf'),
  'Poppins-Light': require('@assets/fonts/Poppins-Light.ttf'),
  'Poppins-Medium': require('@assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Regular': require('@assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Semibold': require('@assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Thin': require('@assets/fonts/Poppins-Thin.ttf'),
};

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <APIProvider>
        <AppLoading fonts={fonts}>
          <RootNavigator />
          <FlashMessage position="top" />
        </AppLoading>
      </APIProvider>
    </GestureHandlerRootView>
  );
};

export default App;

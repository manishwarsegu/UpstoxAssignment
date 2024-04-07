import React from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import StackNavigation from './navigation/stack-navigation';
import {COMMON_STYLES} from './styles/common-styles';

const queryClient = new QueryClient();

function App(): React.JSX.Element {

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={COMMON_STYLES.flex}>
        <SafeAreaProvider>
          <NavigationContainer
            theme={{
              ...DefaultTheme,
              colors: {...DefaultTheme.colors, primary: 'darkslateblue'},
            }}>
            <StackNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default App;

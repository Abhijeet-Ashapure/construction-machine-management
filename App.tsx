import React from 'react';
import { Provider } from 'react-redux';
import createStore from './app/reducers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackNavigator } from './app/navigation';

const App = () => {
  const store = createStore();
  return (
    <Provider store={store}>
      {/* wrapping root component 'Inventory management' within <Provider/> */}
      <SafeAreaProvider>
        <RootStackNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

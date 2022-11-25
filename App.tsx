import React from 'react';
import { Provider } from 'react-redux';
import createStore from './app/reducers';
import WeatherSearch from './app/screens/WeatherSearch';

const App = () => {
  const store = createStore();
  return (
    <Provider store={store}>
      {/* wrapping root component 'WeatherSearch' within <Provider/> */}
      <WeatherSearch /> 
    </Provider>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import AuthNavigator from './src/navigation/AuthNavigator';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AuthNavigator />
    </Provider>
  );
}

import React from 'react';
import {View, Text} from 'react-native';

import {Provider} from 'react-redux';
import {Persistor, Store} from './src/Store/Store';
import {PersistGate} from 'redux-persist/lib/integration/react';

import Root from './root';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}

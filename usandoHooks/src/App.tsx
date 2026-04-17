import React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CalculateScreen from './screens/CalculateScreen';
import styles from './App.style';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <CalculateScreen />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
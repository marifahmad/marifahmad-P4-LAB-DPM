import React from 'react';
import { View, StyleSheet } from 'react-native';
import Match from './Match';

const App = () => {
  return (
    <View style={styles.container}>
      <Match teamA="Team A" teamB="Team B" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default App;

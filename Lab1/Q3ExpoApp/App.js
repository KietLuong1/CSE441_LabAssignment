import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const[pressCount, setPressCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>You've pressed the button: {pressCount} time(s)</Text>
      <Button title="Press Me" onPress={() => setPressCount(pressCount + 1)} />
      <StatusBar style="auto" />
    </View>
  );
}


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import * as Speech from 'expo-speech';
import react, {useState} from 'react';

export default function App() {
  const [text, onChangeText] = useState("");

  const speak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}/>
      <Button onPress={speak} title="PRESS TO HEAR TEXT"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    width: 100, 
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

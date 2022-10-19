import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Heyyyy</Text>
      </View>
      <Text style={styles.dummyText}>Another piece </Text>
      <Text>Hello World</Text>
      <Button title='Tap Me'></Button>
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
  dummyText: {
    margin: 16,
    borderWidth: 16,
    borderColor: '#fff',
    padding: 16
  }
});

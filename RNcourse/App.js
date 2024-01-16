import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <Text
        // 스타일 설정시 px은 사용할 수 없다.
        style={{ color: 'red', marginTop: 30, borderWidth: 1, padding: 20 }}
      >
        Hello World!
      </Text>
      <Button title="Click Me" onPress={() => console.log('a')} />
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
});

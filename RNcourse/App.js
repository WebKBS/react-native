import { useEffect, useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
      response.json().then((data) => {
        setEnteredGoal(data);
      });
    });
  }, []);

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
          keyboardType="number-pad"
        />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
        <ScrollView>
          {enteredGoal.map((item) => (
            <Text key={item.id}>{item.title}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginRight: 8,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

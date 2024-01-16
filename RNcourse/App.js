import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* FlatList는 스크롤시 데이터가 화면에 나타날때만 나타나는 데이터를 렌더링을 한다. Scrollview 대신 적합*/}
        {/* https://reactnative.dev/docs/scrollview 참조! */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            // keyExtractor는 key를 지정해주는 함수이다. key는 고유한 값이어야한다.
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
        {/* ScrollView는 전체 Ui가 렌더링 될때마다 안에있는 항목 전체가 렌더링 된다. 고로 성능상 문제가 있을수 있다. */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6, // 안드로이드만 가능하다.
    backgroundColor: '#5e0acc',
    shadowColor: 'red',
    shadowOpacity: 1,
    shadowOffset: { width: 1, height: 1 },
  },
  goalText: {
    color: 'white',
  },
});

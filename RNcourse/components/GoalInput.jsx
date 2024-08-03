import {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.length === 0) {
      alert('내용을 입력해주세요.');
      return;
    }
    console.log(enteredGoalText);
    props.onAddGoal(enteredGoalText); // App.jsx에서 props로 전달받은 onAddGoal 함수를 호출한다. 함수 끌어올리기
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image}/>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText} // 입력한 텍스트를 value에 넣어주고 초기화 해준다.
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#311b6b",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
    width: '60%',
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
  },
});

import {useState} from 'react';
import {Button, FlatList, StatusBar, StyleSheet, View} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    console.log(id);
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }


  return (
    <>
      <StatusBar/>
      <View style={styles.appContainer}>
        <Button title={'Add New Goal'} color="#5e0acc" onPress={startAddGoalHandler}/>
        <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} visible={modalIsVisible}/>
        <View style={styles.goalsContainer}>
          {/* FlatList는 스크롤시 데이터가 화면에 나타날때만 나타나는 데이터를 렌더링을 한다. Scrollview 대신 적합*/}
          {/* https://reactnative.dev/docs/scrollview 참조! */}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});

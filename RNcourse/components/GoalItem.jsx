import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      {/* bind를 통해 함수를 미리 바인딩 해놓는다. */}
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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

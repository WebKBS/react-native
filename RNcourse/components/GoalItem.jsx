import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#ddd' }} // 안드로이드 터치시 물결 효과
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => (pressed ? styles.pressedItem : null)} // ios에서 터치시 효과
      >
        {/* bind를 통해 함수를 미리 바인딩 해놓는다. */}
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
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
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});

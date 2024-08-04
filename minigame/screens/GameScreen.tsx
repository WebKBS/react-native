import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const GameScreen = ({}) => {
  return (
    <View style={styles.screen}>
      <Text>
        Opponent's Guess
      </Text>
      <Text>
        GUESS
      </Text>
      <View>
        <Text>
          Higher or Lower?
        </Text>
        <Text>+</Text>
        <Text>-</Text>
      </View>
      <View>
        <Text>
          LOG ROUNDS
        </Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  }
});

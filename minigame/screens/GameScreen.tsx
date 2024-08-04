import React, {useState} from 'react';
import {Text, View, StyleSheet} from "react-native";
import Title from "@/components/ui/Title";
import NumberContainer from "@/components/game/NumberContainer";


const generateRandomBetween = (min: number, max: number, exclude: number): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({userNumber}: { userNumber: number }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>
        Opponent's Guess
      </Title>
      <NumberContainer>
        {currentGuess.toString()}
      </NumberContainer>
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
  },

});

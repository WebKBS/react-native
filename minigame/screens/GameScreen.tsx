import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Alert, FlatList} from "react-native";
import Title from "@/components/ui/Title";
import NumberContainer from "@/components/game/NumberContainer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";
import {Ionicons} from "@expo/vector-icons";
import GuessLogItem from "@/components/game/GuessLogItem";


const generateRandomBetween = (min: number, max: number, exclude: number): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}: { userNumber: number, onGameOver: () => void }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }

  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction: "lower" | "higher") => {
    if ((direction === "lower" && currentGuess < userNumber) || (direction === "higher" && currentGuess > userNumber)) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [{text: "Sorry!", style: "cancel"}]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds((curRounds) => [newRndNumber, ...curRounds]);
  }

  return (
    <View style={styles.screen}>
      <Title>
        Opponent's Guess
      </Title>
      <NumberContainer>
        {currentGuess.toString()}
      </NumberContainer>
      <Card>
        <View>
          <InstructionText style={styles.instructionText}>
            Higher or Lower?
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Ionicons name={"remove"} size={24} color={"white"}/>
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
                <Ionicons name={"add"} size={24} color={"white"}/>
              </PrimaryButton>
            </View>
          </View>
        </View>
        <View>
          <Text>
            LOG ROUNDS
          </Text>
        </View>
      </Card>
      <View>
        {/*{guessRounds.map((guess, index) => (*/}
        {/*  <Text key={index}>*/}
        {/*    {guess}*/}
        {/*  </Text>*/}
        {/*))}*/}
        <FlatList data={guessRounds} renderItem={({item, index}) => (
          <GuessLogItem roundNumber={guessRounds.length - index} guess={item.toString()}/>
        )} keyExtractor={(item) => item.toString()}/>
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

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1
  },

  instructionText: {
    marginBottom: 12,
  }
});

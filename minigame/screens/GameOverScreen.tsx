import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import Title from "@/components/ui/Title";
import Colors from "@/constants/colors";
import PrimaryButton from "@/components/ui/PrimaryButton";

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}: {
  roundsNumber: number,
  userNumber: number,
  onStartNewGame: () => void
}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/success.png")} style={styles.image}/>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text
        style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>
        START NEW GAME
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "OpenSans-Regular",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "OpenSans-Bold",
    color: Colors.primary500,
  }
})
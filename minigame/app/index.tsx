import StartGameScreen from "@/screens/StartGameScreen";
import {ImageBackground, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "@/screens/GameScreen";

export default function Page() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen/>
  }

  return (
    <>
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
        <ImageBackground source={require("../assets/images/background.png")} resizeMode="cover"
                         style={styles.rootScreen}
                         imageStyle={styles.backgroundImage}>
          {screen}
        </ImageBackground>
      </LinearGradient>


    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});


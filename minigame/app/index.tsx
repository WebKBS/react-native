import StartGameScreen from "@/screens/StartGameScreen";
import {ImageBackground, SafeAreaView, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "@/screens/GameScreen";
import Colors from "@/constants/colors";
import GameOverScreen from "@/screens/GameOverScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading/build/AppLoadingNativeWrapper";


export default function Page() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    // fonts가 로드되지 않을 때 AppLoading을 띄워준다.
    return <AppLoading/>
  }


  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const gameOverHandler = () => {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen/>
  }


  return (
    <>
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen} start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}>
        <ImageBackground source={require("../assets/images/background.png")} resizeMode="cover"
                         style={styles.rootScreen}
                         imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
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


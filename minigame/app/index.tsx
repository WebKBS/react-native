import StartGameScreen from "@/screens/StartGameScreen";
import {ImageBackground, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export default function Page() {

  return (
    <>
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
        <ImageBackground source={require("../assets/images/background.png")} resizeMode="cover"
                         style={styles.rootScreen}
                         imageStyle={styles.backgroundImage}>
          <StartGameScreen/>
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


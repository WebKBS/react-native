import StartGameScreen from "@/screens/StartGameScreen";
import {StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export default function Page() {

  return (
    <>
      <LinearGradient colors={["#ddb52f", "#4e0329"]} style={styles.rootScreen} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
        <StartGameScreen/>
      </LinearGradient>


    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  }
});


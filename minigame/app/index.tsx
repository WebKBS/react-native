import StartGameScreen from "@/screens/StartGameScreen";
import {View, StyleSheet} from "react-native";

export default function Page() {

  return (
    <>
      <View style={styles.rootScreen}>
        <StartGameScreen/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  }
});


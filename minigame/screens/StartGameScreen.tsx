import {TextInput, View} from "react-native";
import PrimaryButton from "@/components/PrimaryButton";
import {StyleSheet} from "react-native";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput}
                 maxLength={2}
                 keyboardType="number-pad"
                 autoCapitalize="none"
                 autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 6
  },

  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center"
  }
})
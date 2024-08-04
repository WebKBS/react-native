import {Alert, TextInput, View} from "react-native";
import PrimaryButton from "@/components/PrimaryButton";
import {StyleSheet} from "react-native";
import {useState} from "react";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (inputText: string) => {
    setEnteredNumber(inputText);
  }

  const resetInputHandler = () => {
    setEnteredNumber("");
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("숫자가 잘못되었습니다.", "1부터 99 사이의 숫자를 입력해주세요.", [{
        text: "확인",
        style: "destructive",
        onPress: resetInputHandler
      }]);
      return;
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput}
                 maxLength={2}
                 keyboardType="number-pad"
                 autoCapitalize="none"
                 autoCorrect={false}
                 value={enteredNumber}
                 onChangeText={numberInputHandler}

      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={
            resetInputHandler
          }>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
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
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1
  }
})
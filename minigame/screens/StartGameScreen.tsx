import {Alert, Text, TextInput, useWindowDimensions, View} from "react-native";
import PrimaryButton from "@/components/ui/PrimaryButton";
import {StyleSheet} from "react-native";
import {useState} from "react";
import Colors from "@/constants/colors";
import Title from "@/components/ui/Title";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";

const StartGameScreen = ({onPickedNumber}: { onPickedNumber: (pickedNumber: number) => void }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const {width, height} = useWindowDimensions();


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

    onPickedNumber(chosenNumber);
  }

  const marginTop = height < 450 ? 100 : 200;

  return (
    <View style={[styles.rootContainer, {marginTop: marginTop}]}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>
          Enter a Number</InstructionText>
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
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },


  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
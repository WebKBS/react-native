import React from 'react';
import {Pressable, Text, View, StyleSheet} from "react-native";
import Colors from "@/constants/colors";

const PrimaryButton = ({children, onPress}: { children: React.ReactNode, onPress?: () => void }) => {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({pressed}) => {
        if (pressed) {
          return [styles.buttonInnerContainer, styles.pressed]
        } else {
          return styles.buttonInnerContainer
        }
      }
      } onPress={onPress}
                 android_ripple={{color: Colors.primary600}} // android_ripple는 안드로이드에서만 적용됨
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  }
});
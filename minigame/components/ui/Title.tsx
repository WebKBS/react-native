import React from 'react';
import {StyleSheet, Text} from "react-native";

const Title = ({children}: { children: string }) => {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    borderRadius: 20,
    margin: "auto"
  }
})

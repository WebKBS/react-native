import React from 'react';
import {Dimensions, View} from "react-native";
import {StyleSheet} from "react-native";
import Colors from "@/constants/colors";

const Card = ({children}: { children: React.ReactNode }) => {
  return (
    <View style={styles.card}>{children}</View>
  );
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 450 ? 16 : 24,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
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
})

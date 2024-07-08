import { Button, Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { number } from "../app/src/tanlogic";    

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }
  return (
    <TouchableOpacity onPress={()=>number(text)} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>

  );
};

// set dimmenstion
const screen = Dimensions.get("window");
buttonWidth = screen.width / 5;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  textSecondary: {
    color: "white",
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#376099",
  },
  buttonAccent: {
    backgroundColor: "#97cedb",

  },
});
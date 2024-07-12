import { Button, Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ onPress, text, size, theme,disabled}) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  } else if (size === "small") {
    buttonStyles.push(styles.buttonSmall);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }
  else if (theme === "switch") {
    buttonStyles.push(styles.buttonSwitch);
  }

  return (
    <TouchableOpacity onPress={disabled ? null : onPress}
    style={buttonStyles}
    activeOpacity={disabled ? 0.9 : 0.7}>
      
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimensions
const screen = Dimensions.get("window");
buttonWidth = screen.width / 5;
smallButtonWidth = screen.width / 10;

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
  buttonSmall: {
    width: smallButtonWidth,
    height: smallButtonWidth,
    borderRadius: 7,
    flex: 0,
    
  },
  text: {
    color: "#fff",
    fontSize: 20,
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
  buttonSwitch: {
    backgroundColor: "#d16e30",
  },
});

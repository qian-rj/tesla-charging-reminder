import {TouchableOpacity, StyleSheet, Text} from "react-native";

function Button({children, type, style, ...rest}) {
  return (
    <TouchableOpacity style={[styles.button, styles[type], style]} {...rest}>
      <Text style={[styles.buttonText, styles[`${type}ButtonText`]]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    borderRadius: 10,
  },
  primary: {
    backgroundColor: "#335CFF",
  },
  secondary: {
    borderWidth: 1,
    borderColor: "#E1E4EA",

    // shadow
    shadowColor: "#0A0D14", // iOS
    shadowOffset: {width: 0, height: 1}, // iOS
    shadowOpacity: 0.05, // iOS
    shadowRadius: 2, // iOS
    elevation: 5, // Android
  },

  buttonText: {
    width: "100%",
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Inter_500Medium",
  },

  primaryButtonText: {
    color: "#FFFFFF",
  },

  secondaryButtonText: {
    color: "#525866",
  },
});

export default Button;

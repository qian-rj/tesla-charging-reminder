import {StyleSheet, Text, TextInput, View} from "react-native";

// TODO - WORK ON DISABLED STATE

function Input({left, rightText, rightStyle, ...props}) {
  return (
    <View style={styles.inputContainer}>
      {left}
      <TextInput style={styles.input} {...props} />
      <Text style={[styles.right, rightStyle]}>{rightText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexGrow: 1,
  },

  right: {
    color: "#525866",
  },
});

export default Input;

import {StyleSheet, Text, TextInput, View} from "react-native";

function Input({left, rightText, rightStyle, editable, ...props}) {
  return (
    <View style={styles.inputContainer}>
      {left}
      <TextInput
        style={[styles.input, !editable && styles.disabled]}
        editable={editable}
        {...props}
      />
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
    color: "#0E121B",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexGrow: 1,
  },

  disabled: {
    borderColor: "#F5F7FA",
    color: "#525866",
    backgroundColor: "#F5F7FA",
  },

  right: {
    color: "#525866",
  },
});

export default Input;

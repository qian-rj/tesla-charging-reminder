import {View, Text, TextInput, StyleSheet} from "react-native";
import Button from "../components/Button";

// TO DO - HEADER WITH VEHICLE COMPONENT

function ReminderSettingsScreen({vehicle}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Charge Mileage (mi)</Text>
      <Text style={styles.label}>Reminder Percentage</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="e.g. 300"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="e.g. 80"
          keyboardType="numeric"
        />
      </View>

      <Button type="secondary" style={styles.button}>
        Change Settings
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  label: {
    fontSize: 16,
    color: "#0E121B",
    marginBottom: 8,
    fontFamily: "Inter_500Medium", // use your font configuration here
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default ReminderSettingsScreen;

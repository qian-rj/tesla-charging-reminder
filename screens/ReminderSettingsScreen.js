import {View, Text, StyleSheet} from "react-native";
import Button from "../components/Button";
import Vehicle from "../components/Vehicle";
import Header from "../layout/Header";
import Screen from "../layout/Screen";
import Input from "../components/Input";

function ReminderSettingsHeader({params}) {
  return (
    <Header>
      <Vehicle vehicle={params} />
    </Header>
  );
}

// TODO - DISABLE/ENABLE BUTTON AND STATE UPDATE
function ReminderSettingsScreen({route}) {
  const vehicle = route?.params;

  return (
    <Screen>
      <View style={styles.settingsContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Charge Mileage (mi)</Text>
          <Input placeholder="e.g. 300" keyboardType="numeric" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Reminder Percentage</Text>
          <Input
            placeholder="e.g. 80"
            keyboardType="numeric"
            maxLength={2}
            rightText="%"
            rightStyle={{position: "absolute", right: 12}}
          />
        </View>
      </View>

      <Button type="secondary" style={styles.button}>
        Change settings
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    fontSize: 12,
    color: "#0E121B",
    marginBottom: 8,
    fontFamily: "Inter_500Medium",
  },

  settingsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  inputContainer: {
    flexDirection: "column",
    maxWidth: "48%",
    flex: 1,
  },

  button: {
    marginTop: 20,
  },
});

export {ReminderSettingsHeader};
export default ReminderSettingsScreen;

import {View, Text, StyleSheet} from "react-native";
import Button from "../components/Button";
import Vehicle from "../components/Vehicle";
import Header from "../layout/Header";
import Screen from "../layout/Screen";
import Input from "../components/Input";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {
  deleteVehicleReminder,
  updateVehicleReminder,
} from "../store/settingsSlice";

function ReminderSettingsHeader({params}) {
  return (
    <Header>
      <Vehicle vehicle={params} />
    </Header>
  );
}

function ReminderSettingsScreen({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const vehicle = route?.params;
  const [enabled, setEnabled] = useState(false);
  const [full_charge_miles, setMileage] = useState(vehicle.full_charge_miles);
  const [reminder_percentage, setPercentage] = useState(
    vehicle.reminder_percentage
  );
  console.log(full_charge_miles, reminder_percentage);

  function onUpdate() {
    setEnabled(false);
    dispatch(
      updateVehicleReminder({
        id: vehicle.id,
        full_charge_miles,
        reminder_percentage,
      })
    );
  }

  function onDelete() {
    dispatch(deleteVehicleReminder(vehicle.id));
    navigation.goBack();
  }

  return (
    <Screen>
      <View style={styles.settingsContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Charge Mileage (mi)</Text>
          <Input
            placeholder={"" + vehicle.full_charge_miles}
            keyboardType="numeric"
            editable={enabled}
            value={full_charge_miles}
            onChangeText={value => setMileage(value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Reminder Percentage</Text>
          <Input
            placeholder={"" + vehicle.reminder_percentage}
            keyboardType="numeric"
            maxLength={2}
            rightText="%"
            rightStyle={{position: "absolute", right: 12}}
            editable={enabled}
            value={reminder_percentage}
            onChangeText={value => setPercentage(value)}
          />
        </View>
      </View>

      {!enabled ? (
        <Button
          type="secondary"
          style={styles.button}
          onPress={() => setEnabled(true)}
        >
          Change settings
        </Button>
      ) : (
        <Button type="primary" style={styles.button} onPress={onUpdate}>
          Update
        </Button>
      )}

      <Button type="secondary" style={styles.button} onPress={onDelete}>
        Delete
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

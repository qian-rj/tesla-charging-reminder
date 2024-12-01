import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Screen from "../layout/Screen";
import {useNavigation} from "@react-navigation/native";
import VehicleSelect from "../components/VehicleSelect";
import Button from "../components/Button";

function AddVehicleHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.text}>New vehicle</Text>
      <TouchableOpacity
        style={styles.headerX}
        onPress={() => navigation.goBack()}
      >
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
}

function AddVehicleScreen() {
  return (
    <Screen>
      <Text style={styles.label}>Select vehicle</Text>
      <VehicleSelect />
      <Button type="primary" style={styles.button}>
        Confirm
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
  text: {
    fontSize: 14,
    fontWeight: 500,
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 4,
  },
  headerX: {
    color: "black",
    // paddingLeft: "5%",
    // textAlign: "right",
    // backgroundColor: "red",
  },
  selectText: {
    fontWeight: 500,
  },
  button: {
    marginTop: 16,
  },
});

export default AddVehicleScreen;
export {AddVehicleHeader};

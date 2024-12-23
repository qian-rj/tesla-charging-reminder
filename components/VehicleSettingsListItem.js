import {StyleSheet, TouchableOpacity} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import Vehicle from "./Vehicle";
import {useNavigation} from "@react-navigation/native";

function VehicleSettingsListItem({vehicle}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("ReminderSettings", vehicle)}
    >
      <Vehicle vehicle={vehicle} />

      <MaterialIcons
        name="keyboard-arrow-right"
        size={30}
        color="#7c7e83"
        style={styles.arrowIcon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },

  arrowIcon: {
    alignSelf: "center",
  },
});

export default VehicleSettingsListItem;

import {StyleSheet, Text, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";

function Vehicle({vehicle}) {
  return (
    <View style={styles.vehicleContainer}>
      <FontAwesome5
        name="car"
        size={24}
        color="#7c7e83"
        style={styles.carIcon}
      />

      <View style={styles.infoText}>
        <Text style={styles.vehicleName}>
          {vehicle?.display_name || "No name"}
        </Text>
        <Text style={styles.vehicleModel}>{vehicle?.model || "No model"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  vehicleContainer: {
    flexGrow: 1,
    flexDirection: "row",
  },
  infoText: {
    paddingVertical: 3,
    marginLeft: 12,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  vehicleName: {
    color: "#0E121B",
    fontSize: 14,
    fontFamily: "Inter_500Medium",
  },
  vehicleModel: {
    color: "#525866",
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },

  carIcon: {
    padding: 12,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E1E4EA",
  },
});

export default Vehicle;

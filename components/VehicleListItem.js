import {StyleSheet, Text, View} from "react-native";
import {FontAwesome5, MaterialIcons} from "@expo/vector-icons";

function VehicleListItem({vehicle}) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.info}>
        <FontAwesome5
          name="car"
          size={24}
          color="#7c7e83"
          style={styles.carIcon}
        />

        <View style={styles.infoText}>
          <Text style={styles.vehicleName}>{vehicle?.name || "No name"}</Text>
          <Text style={styles.vehicleModel}>
            {vehicle?.model || "No model"}
          </Text>
        </View>
      </View>

      <MaterialIcons
        name="keyboard-arrow-right"
        size={30}
        color="#7c7e83"
        style={styles.arrowIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
    // backgroundColor: "red",
  },

  info: {
    // backgroundColor: "blue",
    flexGrow: 1,
    flexDirection: "row",
  },
  infoText: {
    paddingVertical: 3,
    marginLeft: 12,
    // backgroundColor: "yellow",
    flexGrow: 1,
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
  arrowIcon: {
    alignSelf: "center",
  },
});

export default VehicleListItem;

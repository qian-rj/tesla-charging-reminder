import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons";
import {decodeTeslaVin} from "../util/tesla";

function VehicleSelectOption({vehicle, selected, onSelect}) {
  return (
    <TouchableOpacity
      style={[styles.selectBox, selected == vehicle.vin && styles.selectedBox]}
      onPress={() => onSelect(vehicle.vin)}
    >
      <View>
        <Text style={styles.title}>{vehicle.display_name}</Text>
        <Text style={styles.subtitle}>{decodeTeslaVin(vehicle.vin)}</Text>
      </View>
      {selected == vehicle.vin ? (
        <Feather name="check-square" size={24} color="#335CFF" />
      ) : (
        <Feather
          name="square"
          size={24}
          color="#dcdee5"
          style={styles.emptySquare}
        ></Feather>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginVertical: 4,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E1E4EA",
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#0A0D1408",
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 1},
  },
  selectedBox: {
    borderColor: "#335CFF",
  },
  emptySquare: {
    shadowColor: "#1B1C1D1F",
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 2},
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#666",
  },
});

export default VehicleSelectOption;

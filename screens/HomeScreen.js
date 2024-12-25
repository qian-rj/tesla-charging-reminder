import {StyleSheet, Text, View} from "react-native";
import Button from "../components/Button";
import Screen from "../layout/Screen";
import VehicleSettingsListItem from "../components/VehicleSettingsListItem";
import {useSelector} from "react-redux";

function HomeScreen({navigation}) {
  const {vehicleReminders} = useSelector(state => state.settings);

  return (
    <Screen>
      <Text style={styles.heading}>Hi, see your settings below</Text>

      <View>
        {vehicleReminders?.map(vehicle => (
          <VehicleSettingsListItem vehicle={vehicle} key={vehicle.vin} />
        ))}
      </View>

      <Button
        type="secondary"
        onPress={() => navigation.navigate("AddVehicle")}
      >
        ＋{"  "}Add new vehicle
      </Button>

      <Button type="link" onPress={() => navigation.navigate("Auth")}>
        Authentication
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: "#0E121B",
    marginVertical: 40,
    fontFamily: "Inter_500Medium",
    letterSpacing: -1,
  },
});

export default HomeScreen;

import {StyleSheet, Text, View} from "react-native";
import Button from "../components/Button";
import Screen from "../layout/Screen";
import VehicleListItem from "../components/VehicleListItem";

function HomeScreen({navigation}) {
  return (
    <Screen>
      <Text style={styles.heading}>Hi [user], see your settings below</Text>

      <View>
        <VehicleListItem />
      </View>

      <Button
        type="secondary"
        onPress={() => navigation.navigate("AddVehicle")}
      >
        ＋{"  "}Add new vehicle
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

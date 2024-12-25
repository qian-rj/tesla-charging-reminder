import {StyleSheet, Text} from "react-native";
import Screen from "../layout/Screen";
import {useNavigation} from "@react-navigation/native";
import VehicleSelect from "../components/VehicleSelect";
import Button from "../components/Button";
import {useEffect, useState} from "react";
import {getVehicles} from "../store/auth";
import {addVehicleReminder} from "../store/settingsSlice";
import {useDispatch} from "react-redux";
import Header from "../layout/Header";

function AddVehicleHeader() {
  return (
    <Header>
      <Text style={styles.text}>New vehicle</Text>
    </Header>
  );
}

function AddVehicleScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [vehicles, setVehicles] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  function addVehicle() {
    dispatch(addVehicleReminder(vehicles.find(v => v.vin === selected)));
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchVehicles() {
      const v = await getVehicles();
      setVehicles(v);
      setLoading(false);
    }

    fetchVehicles();
  }, []);

  return (
    <Screen>
      <Text style={styles.label}>Select vehicle</Text>

      {loading ? (
        <Text style={styles.loadingText}>Loading vehicles...</Text>
      ) : vehicles?.length > 0 ? (
        <VehicleSelect
          vehicles={vehicles}
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        <Text style={styles.emptyText}>No vehicles available</Text>
      )}
      {!loading && (
        <Button
          type="primary"
          style={styles.button}
          disabled={!selected}
          onPress={addVehicle}
        >
          Confirm
        </Button>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 500,
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 8,
  },
  selectText: {
    fontWeight: 500,
  },
  emptyText: {
    fontWeight: 300,
    marginVertical: 8,
  },
  loadingText: {
    fontWeight: 300,
    marginVertical: 8,
  },
  button: {
    marginTop: 16,
  },
});

export default AddVehicleScreen;
export {AddVehicleHeader};

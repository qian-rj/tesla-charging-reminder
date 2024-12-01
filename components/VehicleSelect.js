import {useState} from "react";
import {View, Text} from "react-native";
import VehicleSelectOption from "./VehicleSelectOption";

function VehicleSelect() {
  const [selected, setSelected] = useState(null);
  const [vehicles, setVehicles] = useState([
    {name: "Blue wave", model: "Model Y"},
    {name: "Yellow star", model: "Model 3"},
  ]);

  return (
    <View>
      {vehicles.map(v => (
        <VehicleSelectOption
          vehicle={v}
          selected={selected}
          onSelect={setSelected}
          key={v.name}
        />
      ))}
    </View>
  );
}

export default VehicleSelect;

import {View} from "react-native";
import VehicleSelectOption from "./VehicleSelectOption";

function VehicleSelect({vehicles, selected, setSelected}) {
  return (
    <View>
      {vehicles.map(v => (
        <VehicleSelectOption
          vehicle={v}
          selected={selected}
          onSelect={setSelected}
          key={v.vin}
        />
      ))}
    </View>
  );
}

export default VehicleSelect;

import {createSlice} from "@reduxjs/toolkit";
import {decodeTeslaVin} from "../util/tesla";

class VehicleNotification {
  constructor(vin, display_name, model) {
    this.vin = vin;
    this.display_name = display_name;
    this.model = model;
  }
}

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    vehicleReminders: [],
  },
  reducers: {
    addVehicleReminder(state, action) {
      state.vehicleReminders.push({
        model: decodeTeslaVin(action.payload.vin),
        ...action.payload,
      });
    },
  },
});

export const {addVehicleReminder} = settingsSlice.actions;
export default settingsSlice.reducer;

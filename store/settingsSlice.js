import {createSlice} from "@reduxjs/toolkit";
import {decodeTeslaVin} from "../util/tesla";
import {generateId} from "../util/auth";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    vehicleReminders: [],
  },
  reducers: {
    addVehicleReminder(state, action) {
      const {display_name, vin} = action.payload;

      state.vehicleReminders.push({
        id: generateId(36),
        full_charge_miles: 300,
        reminder_percentage: 80,
        model: decodeTeslaVin(action.payload.vin),
        display_name,
        vin,
      });
    },

    updateVehicleReminder(state, action) {
      const {full_charge_miles, reminder_percentage} = action.payload;
      const index = state.vehicleReminders.indexOf(
        state.vehicleReminders.find(v => v.id == action.payload.id)
      );
      state.vehicleReminders[index] = {
        ...state.vehicleReminders[index],
        full_charge_miles,
        reminder_percentage,
      };
    },

    deleteVehicleReminder(state, action) {
      state.vehicleReminders = state.vehicleReminders.filter(
        v => v.id != action.payload
      );
    },
  },
});

export const {
  addVehicleReminder,
  updateVehicleReminder,
  deleteVehicleReminder,
} = settingsSlice.actions;
export default settingsSlice.reducer;

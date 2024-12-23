import axios from "axios";
import * as SecureStore from "expo-secure-store";
const BASE_URI = "https://owner-api.teslamotors.com";

export async function storeAccessToken(token) {
  try {
    await SecureStore.setItemAsync("accessToken", token);
  } catch (error) {
    console.error("Failed to store the token", error);
  }
}

export async function retrieveAccessToken() {
  try {
    const token = await SecureStore.getItemAsync("accessToken");
    if (token) {
      return token;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Failed to retrieve the token", error);
    return null;
  }
}

export async function getVehicles() {
  try {
    const accessToken = await retrieveAccessToken();
    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await axios.get(BASE_URI + "/api/1/products", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const products = response.data.response;

    const vehicles = products.filter(
      product => product.vin && product.vehicle_id
    );

    return vehicles;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

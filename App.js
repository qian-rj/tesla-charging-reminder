import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddVehicleScreen from "./screens/AddVehicleScreen";
import {useFonts} from "expo-font";
import {Inter_500Medium} from "@expo-google-fonts/inter";
import {AddVehicleHeader} from "./screens/AddVehicleScreen";

const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  return (
    <>
      {/* <StatusBar style="light" /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddVehicle"
            component={AddVehicleScreen}
            options={{
              headerTitle: () => <AddVehicleHeader />,
              headerBackVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

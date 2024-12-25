import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddVehicleScreen from "./screens/AddVehicleScreen";
import {useFonts} from "expo-font";
import {Inter_500Medium} from "@expo-google-fonts/inter";
import {AddVehicleHeader} from "./screens/AddVehicleScreen";
import {Provider} from "react-redux";
import {persistor, store} from "./store/configureStore";
import {PersistGate} from "redux-persist/integration/react";
import {Text} from "react-native";
import AuthScreen from "./screens/AuthScreen";
import ReminderSettingsScreen, {
  ReminderSettingsHeader,
} from "./screens/ReminderSettingsScreen";

const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
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
              name="Auth"
              component={AuthScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddVehicle"
              component={AddVehicleScreen}
              options={{
                header: props => <AddVehicleHeader {...props} />,
              }}
            />
            <Stack.Screen
              name="ReminderSettings"
              component={ReminderSettingsScreen}
              options={({route}) => ({
                header: () => <ReminderSettingsHeader params={route?.params} />,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;

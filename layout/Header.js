import {useNavigation} from "@react-navigation/native";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

function Header({children}) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={[styles.header, {paddingTop: insets.top}]}>
      {children}
      <TouchableOpacity
        style={styles.xContainer}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.xText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    padding: 16,
    paddingLeft: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E1E4EA",
  },

  xContainer: {
    position: "absolute",
    padding: 20,
    top: 28,
    right: 5,
  },

  xText: {
    color: "black",
  },
});

export default Header;

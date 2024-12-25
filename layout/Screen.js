import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

function Screen({style, children}) {
  return (
    <SafeAreaView style={[style, styles.container]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingHorizontal: 20,
  },
});

export default Screen;

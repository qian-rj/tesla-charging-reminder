import {StyleSheet, View} from "react-native";

function Screen({style, children}) {
  return <View style={[style, styles.container]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});

export default Screen;

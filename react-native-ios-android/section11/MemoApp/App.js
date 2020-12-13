import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

// import BodyText from "./src/elements/BodyText";
import Appbar from "./src/components/Appbar";
// import MemoListScreen from "./src/screens/MemoListScreen";
// import MemoDateilScreen from "./src/screens/MemoDateilScreen";
// import MemoEditScreen from "./src/screens/MemoEditScreen";
// import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <BodyText>Hello React!</BodyText> */}
      <Appbar />
      {/* <MemoListScreen /> */}
      {/* <MemoDateilScreen /> */}
      {/* <MemoEditScreen /> */}
      {/* <LoginScreen /> */}
      <SignupScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    alignItems: "center",
    justifyContent: "center",
    // appbarのheightと同じ値を指定することで余白を作りappbarとmemoListがかぶらないようにしている
    paddingTop: 78,
  },
});

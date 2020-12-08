import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

// import BodyText from "./src/elements/BodyText";
import Appbar from "./src/components/Appbar";
import MemoList from "./src/components/MemoList";
import CircleButton from "./src/elements/CircleButton";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <BodyText>Hello React!</BodyText> */}
      <Appbar />
      <MemoList />
      <CircleButton>+</CircleButton>
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

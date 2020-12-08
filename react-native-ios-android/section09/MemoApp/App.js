import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import BodyText from "./src/elements/BodyText";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <BodyText>Hello React!</BodyText> */}

      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMOT</Text>
        </View>
      </View>

      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>講座のアイテム</Text>
          <Text style={styles.memoListDate}>2020/12/08</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>講座のアイテム</Text>
          <Text style={styles.memoListDate}>2020/12/08</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>講座のアイテム</Text>
          <Text style={styles.memoListDate}>2020/12/08</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>講座のアイテム</Text>
          <Text style={styles.memoListDate}>2020/12/08</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>講座のアイテム</Text>
          <Text style={styles.memoListDate}>2020/12/08</Text>
        </View>
      </View>

      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonTitle}>+</Text>
      </View>
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
  appbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: "#265366",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 100,
  },
  appbarTitle: {
    color: "#fff",
    fontSize: 18,
  },
  memoList: {
    width: "100%",
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  memoListTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoListDate: {
    fontSize: 12,
    color: "#a2a2a2",
  },
  memoAddButton: {
    position: "absolute",
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: "#E31676",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  memoAddButtonTitle: {
    color: "#fff",
    fontSize: 32,
    // テキストを中央に配置するときはfontSizeとloneHeightを同じ値に設定する
    lineHeight: 32,
  },
});

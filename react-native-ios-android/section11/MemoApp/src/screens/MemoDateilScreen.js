import React from "react";
import { StyleSheet, View, Text } from "react-native";

import CircleButton from "../elements/CircleButton";

class MemoDateilScreen extends React.Component {
  render() {
    return (
      <View style={styles.conteiner}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.momeHeaderTitle}>講座のアイデア</Text>
              <Text style={styles.momeHeaderDate}>2020/12/09</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>講座のアイデア</Text>
        </View>

        <CircleButton name="pencile" color="white" style={styles.editButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: "100%",
  },
  memoHeader: {
    height: 100,
    backgroundColor: "#17313C",
    justifyContent: "center",
    padding: 10,
  },
  momeHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  momeHeaderDate: {
    fontSize: 12,
    color: "#fff",
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  editButton: {
    top: 75,
  },
});

export default MemoDateilScreen;

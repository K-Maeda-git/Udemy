import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import CircleButton from "../elements/CircleButton";

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.conteiner}>
        <TextInput style={styles.memoEditInput} multiline value="hogehoge" />
        <CircleButton
          name="check"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: "100%",
  },
  memoEditInput: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoEditScreen;

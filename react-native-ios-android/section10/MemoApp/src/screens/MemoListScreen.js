import React from "react";
import { StyleSheet, View } from "react-native";

import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.conteiner}>
        <MemoList />
        <CircleButton>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: '100%',
  },
});

export default MemoListScreen;

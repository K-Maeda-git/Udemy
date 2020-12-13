import React from "react";
import { StyleSheet, View } from "react-native";

import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.conteiner}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton
          name="plus"
          onPress={() => {
            this.props.navigation.navigate("MemoEdit");
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
    backgroundColor: "#FFFDF6",
  },
});

export default MemoListScreen;

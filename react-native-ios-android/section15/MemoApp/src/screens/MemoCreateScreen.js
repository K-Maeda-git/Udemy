import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import firebase from "firebase";

import CircleButton from "../elements/CircleButton";

class MemoCreateScreen extends React.Component {
  state = {
    body: "",
  };

  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    console.log(db);
    // firebaseから直接取得する
    db.collection(`users/${currentUser.uid}/memos`)
      .add({
        body: this.state.body,
        createdOn: new Date(),
      })
      .then((docRef) => {
        console.log("success", docRef.id);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  render() {
    return (
      <View style={styles.conteiner}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => {
            this.setState({ body: text });
          }}
        />
        <CircleButton
          name="check"
          onPress={this.handlePress.bind(this)}
          //   onPress={() => {
          //     this.props.navigation.goBack();
          //   }}
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

export default MemoCreateScreen;

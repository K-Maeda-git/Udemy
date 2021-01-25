import React from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  componentDidMount() {
    console.log("TEST->DidMount");
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
    .onSnapshot((snapshot) => {
      const memoList = [];
      console.log(snapshot);
      console.log("snapshot", snapshot);
      console.log("snapshot.empty", snapshot.empty);
      console.log("currentUser", currentUser);
      console.log("currentUser.uid", currentUser.uid);
      snapshot.forEach((doc) => {
        console.log(doc.data());
        memoList.push({ ...doc.data(), key: doc.id });
      });
      this.setState({ memoList });
    });
  }

  handlePress() {
    this.props.navigation.navigate("MemoCreate");
  }

  render() {
    return (
      <View style={styles.conteiner}>
        <MemoList
          memoList={this.state.memoList}
          navigation={this.props.navigation}
        />
        <CircleButton name="plus" onPress={this.handlePress.bind(this)} />
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

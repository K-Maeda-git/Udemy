import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const dateString = (date) => {
  if (date == null) { return ''; }
  // firebaseのTimestamp型をDate型に変換する
  const dateObject = date.toDate();
  return dateObject.toISOString().split('T')[0];
};
class MemoList extends React.Component {
  renderMemo({ item }) {
    console.log(item);
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.navigation.navigate("MemoDetail");
        }}
      >
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>{item.body}</Text>
          <Text style={styles.memoListDate}>2020/12/08</Text>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={styles.memoList}>
        <FlatList
          data={this.props.memoList}
          renderItem={this.renderMemo.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default MemoList;

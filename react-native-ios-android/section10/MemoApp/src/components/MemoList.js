import React from "react";
import { StyleSheet, View, Text } from "react-native";

class MemoList extends React.Component {
  render() {
    return (
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

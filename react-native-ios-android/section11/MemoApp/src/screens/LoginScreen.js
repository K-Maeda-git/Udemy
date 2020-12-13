import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.conteiner}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Pasword" />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#C70F66"
          onPress={() => {}}
        >
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: "100%",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    alignSelf: "center",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#eee",
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 8,
  },
  button: {
    backgroundColor: "#E31676",
    height: 48,
    width: "70%",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 18,
  },
});

export default LoginScreen;

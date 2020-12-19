import React from "react";
import firebase from "firebase";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";

class LoginScreen extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit() {
    // Sign in!!
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      // Sign in完了後ホームへ遷移する
      .then(({ user }) => {
        this.props.navigation.navigate("Home");
        console.log("success", user);
      })
      .catch((error) => {
        console.log("error!", error);
      });
  }

  render() {
    return (
      <View style={styles.conteiner}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          // 大文字の変換を無効化
          autoCapitalize="none"
          // 補完機能の無効化
          autoCorrect={false}
          // テキストボックスに説明を表示
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="#C70F66"
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

import React from "react";
import firebase from "firebase";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";

class SignupScreen extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit() {
    // Sign up!!
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      // Sign up完了後ホームへ遷移する
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
        <Text style={styles.title}>メンバー登録</Text>
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
          placeholder="Password"
          // マスク処理
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#C70F66"
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={styles.buttonTitle}>送信する</Text>
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

export default SignupScreen;

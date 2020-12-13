import React from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { createIconSet } from "@expo/vector-icons";
import fontAwesome from "../../assets/fonts/fa-solid-900.ttf";

const CustomIcon = createIconSet({
  pencile: "\uf304",
  plus: "\uf067",
  check: "\uf00c",
}, "FontAwesome");

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    // フォントを読み込む
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    // 他で定義したスタイルを適用することができる
    // {}で囲うことでthis.propsの中のstyleというオブジェクトを指定して抜き出す
    // やっていることは「const style = this.props.style;」と一緒
    const { name, style, color } = this.props;

    let bgColor = "#E31676";
    let textColor = "#fff";

    // 渡ってきたcolorが"white"であれば色を変更する
    if (color === "white") {
      bgColor = "#fff";
      textColor = "#E31676";
    }

    return (
      // 配列として定義したスタイルを渡すことで上書きする
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {this.state.fontLoaded ? (
          <CustomIcon
            name={name}
            style={[styles.circleButtonTitle, { color: textColor }]}
          />
          //  親から渡ってきた要素を表示する
          //  {this.props.children}
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: "absolute",
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    // backgroundColor: "#E31676",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: "FontAwesome",
    // color: "#fff",
    fontSize: 24,
    // テキストを中央に配置するときはfontSizeとloneHeightを同じ値に設定する
    lineHeight: 32,
  },
});

export default CircleButton;
